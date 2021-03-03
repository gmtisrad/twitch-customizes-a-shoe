/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as puppeteer from "puppeteer";
import { spawn } from "child_process";
import { IRCBot } from "./IRCBot";
import { RTMP_SERVER } from "./secrets";

export class ShoeCustomizer {
  browser: puppeteer.Browser;
  page: puppeteer.Page;
  canvas: HTMLCanvasElement;
  session: puppeteer.CDPSession;
  ffmpeg: any;
  frame: string;
  bot: IRCBot;
  commandHandler: any;

  constructor() {
    this.browser = null;
    this.page = null;
    this.session = null;
    this.frame = null;
    this.commandHandler = null;
  }

  public async launchBrowser(url = "http://localhost:3000/"): Promise<void> {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();

    this.page.on("console", (message: any) =>
      console.log(`Puppeteer: ${message.text()}`)
    );

    await this.page.setViewport({ height: 768, width: 1024 });

    await this.page.goto(url, {
      waitUntil: "networkidle2",
    });

    this.session = await this.page.target().createCDPSession();

    this.bot = new IRCBot();

    this.bot.initializeBot(
      (MCID: string) => this.setMC(MCID),
      (mid: string, qid: string, aid: string) => this.setColor(mid, qid, aid)
    );
  }

  public setColor(
    marketingComponentId: string,
    questionId: string,
    answerId: string
  ): void {
    this.page.evaluate(
      (marketingComponentId: string, questionId: string, answerId: string) => {
        console.log(
          (window as any).pdpApi.setAnswer ? "SET ANSWER IS HERE" : "NOPE"
        );
        (window as any).pdpApi.setColor(
          marketingComponentId,
          questionId,
          answerId
        );
      },
      marketingComponentId,
      questionId,
      answerId
    );
  }

  public setMC(mcId: string): void {
    this.page.evaluate((mcId: string) => {
      (window as any).pdpApi.setMarketingComponent(mcId);
    }, mcId);
  }

  public async startStream(): Promise<void> {
    this.ffmpeg = spawn(
      "ffmpeg",
      [
        "-framerate",
        "5",
        "-f",
        "png_pipe",
        "-vcodec",
        "png",
        "-i",
        "pipe:0",
        "-vcodec",
        "h264",
        "-g",
        "15",
        "-f",
        "flv",
        "-r",
        "25",
        RTMP_SERVER,
      ],
      { stdio: "pipe" }
    );

    await this.session.send("Page.startScreencast");
    this.session.on("Page.screencastFrame", (event) => {
      console.log("NEW FRAME");
      const buffer = Buffer.from(event.data, "base64");
      this.ffmpeg.stdin.write(buffer);
      this.session
        .send("Page.screencastFrameAck", { sessionId: event.sessionId })
        .catch((e) => {
          console.error(e);
        });
    });

    // @ts-ignore no-implicit-any
    this.ffmpeg.stdout.on("data", (buffer: Buffer) =>
      // @ts-ignore no-implicit-any
      console.log(new Buffer.from(buffer).toString())
    );
    // @ts-ignore no-implicit-any
    this.ffmpeg.stderr.on("data", (buffer: Buffer) =>
      // @ts-ignore no-implicit-any
      console.log(new Buffer.from(buffer).toString())
    );
  }
}
