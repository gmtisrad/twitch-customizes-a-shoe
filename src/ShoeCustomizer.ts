import * as puppeteer from 'puppeteer';
import { MC, RTMP_SERVER } from './constants';
import { spawn } from 'child_process';
import { IRCBot } from './IRCBot';

export class ShoeCustomizer {
  browser: puppeteer.Browser;
  page: puppeteer.Page;
  canvas: HTMLCanvasElement;
  session: puppeteer.CDPSession;
  ffmpeg: any;
  frame: string;
  bot: IRCBot;
  currentMC: MC;
  commandHandler: any;

  constructor() {
    this.browser = null;
    this.page = null;
    this.session = null;
    this.frame = null;
    this.commandHandler = null;
    this.currentMC = MC.BASE;

    this.bot = new IRCBot();
    
    this.bot.initializeBot();
  }

  public async launchBrowser(url: string = 'http://localhost:3000/'): Promise<void> {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();

    this.page.on('console', (message: any) => console.log(`Puppeteer: ${message.text()}`))

    await this.page.setViewport({height: 1080, width: 1920})

    await this.page.goto(url, {
      waitUntil: 'networkidle2'
    })

    this.commandHandler = await this.page.evaluateHandle(() => {

    })

    this.session = await this.page.target().createCDPSession();
  }

  public async startStream() {
    this.ffmpeg = spawn("ffmpeg",
    ["-re", "-f", "png_pipe", "-vcodec", "png", "-i", "pipe:0", "-vcodec", "h264", "-f", "flv", RTMP_SERVER],
    { stdio: 'pipe' })
    
    await this.session.send('Page.startScreencast');
    this.session.on('Page.screencastFrame', event => {
      console.log('NEW FRAME');
      this.frame = event.data;
    })

    // @ts-ignore no-implicit-any
    this.ffmpeg.stdout.on('data', (buffer: any) => console.log(new Buffer.from(buffer).toString()));
    // @ts-ignore no-implicit-any
    this.ffmpeg.stderr.on('data', (buffer: any) => console.log(new Buffer.from(buffer).toString()));

    setInterval(() => {
      if (!this.frame) return;
      console.log("writing to ffmpeg");
      const buffer = Buffer.from(this.frame, 'base64');
      console.log(buffer);
      
      this.ffmpeg.stdin.write(buffer);
    }, 1000 / 25)
  }
}