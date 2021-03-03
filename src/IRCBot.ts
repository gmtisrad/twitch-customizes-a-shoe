/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as tmi from "tmi.js";
import {
  COLORS,
  COLOR_ID_MAP,
  MC,
  MC_ID_MAP,
  MC_ID_TO_Q_MAP,
} from "./constants";

export class IRCBot {
  client: tmi.Client;
  setMC: (...args: any | any) => any;
  setColor: any;
  currentMC: string;
  auth: string;

  constructor() {
    this.currentMC = MC_ID_MAP.BASE;
    this.client = new tmi.client({
      connection: {
        secure: false,
        reconnect: true,
      },
      identity: {
        username: "nikebyyou_cxp",
        password: "oauth:mvl7f2dwiaw3v9s5zn90c6j58zsj3k",
      },
      channels: ["nikebyyou_cxp"],
    });
  }

  parseCommand(command: string): void {
    const cleanedCommand = command.replace("cmd:", "").trim();
    if (command.includes("help")) {
      this.client.say(
        "nikebyyou_cxp",
        `Commands are prefixed with 'cmd: '. The arguments options are a color, or marketing component. Example: 'cmd: base' or 'cmd: red'`
      );
    }
    switch (cleanedCommand) {
      // Marketing Components
      case MC.BASE:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.BASE);
        this.currentMC = MC_ID_MAP.BASE;
        break;
      case MC.OVERLAY:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.OVERLAY);
        this.currentMC = MC_ID_MAP.OVERLAY;
        break;
      case MC.MUDGUARD:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.MUDGUARD);
        this.currentMC = MC_ID_MAP.MUDGUARD;
        break;
      case MC.SWOOSH:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.SWOOSH);
        this.currentMC = MC_ID_MAP.SWOOSH;
        break;
      case MC.EYESTAY:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.EYESTAY);
        this.currentMC = MC_ID_MAP.EYESTAY;
        break;
      case MC.UPPER_EYESTAY:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.UPPER_EYESTAY);
        this.currentMC = MC_ID_MAP.UPPER_EYESTAY;
        break;
      case MC.BACKTAB:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.LOGO);
        this.currentMC = MC_ID_MAP.BACKTAB;
        break;
      case MC.LACES:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.LACES);
        this.currentMC = MC_ID_MAP.LACES;
        break;
      case MC.LINING:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.LINING);
        this.currentMC = MC_ID_MAP.LINING;
        break;
      case MC.MIDSOLE:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.MIDSOLE);
        this.currentMC = MC_ID_MAP.MIDSOLE;
        break;
      case MC.WEDGE:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.WEDGE);
        this.currentMC = MC_ID_MAP.WEDGE;
        break;
      case MC.AIRBAG:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.AIRBAG);
        this.currentMC = MC_ID_MAP.AIRBAG;
        break;
      case MC.OUTSOLE:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.OUTSOLE);
        this.currentMC = MC_ID_MAP.OUTSOLE;
        break;
      case MC.LOGO:
        console.log(`Received command: |${cleanedCommand}|`);
        this.setMC(MC_ID_MAP.LOGO);
        this.currentMC = MC_ID_MAP.LOGO;
        break;
      // Color
      case COLORS.BLACK:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.GREY:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.SAIL:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.WHITE:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.THERMAL_GREEN:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.RAINFOREST:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.BLUE:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.DARKBLUE:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.PINK:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.RED:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.HONEYCOMB:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      case COLORS.OTHER_PINK:
        console.log(`Received command: |${cleanedCommand}|`);
        console.log(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        this.setColor(
          this.currentMC,
          // @ts-ignore no-implicit-any
          MC_ID_TO_Q_MAP[this.currentMC],
          COLOR_ID_MAP[cleanedCommand]
        );
        break;
      default:
        console.log(`Unrecognized command: |${cleanedCommand}|`);
        break;
    }
  }

  initializeBot(setMC: any, setColor: any): void {
    this.setMC = setMC;
    this.setColor = setColor;

    this.client.connect();

    this.client.on("message", (channel, tags, message, self) => {
      console.log(`${tags["display-name"]}: ${message}`);
      if (message.slice(0, 4).toLowerCase() === "cmd:") {
        this.parseCommand(message);
      }
    });
  }
}
