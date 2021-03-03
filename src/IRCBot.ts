import * as tmi from 'tmi.js';
import { COLORS, MC } from './constants';

export class IRCBot {
  client: tmi.Client;


  constructor() {
    this.client = new tmi.client({
      connection: {
        secure: false,
        reconnect: true
      },
      channels: ['nikebyyou_cxp']
    })
  }

  parseCommand(command: string): any {
    const cleanedCommand = command.replace('cmd:', '').trim();
    switch (cleanedCommand) {
      // Marketing Components
      case MC.BASE:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.OVERLAY:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.MUDGUARD:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.SWOOSH:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.EYESTAY:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.UPPER_EYESTAY:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.BACKTAB:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.LACES:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.LINING:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.MIDSOLE:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.WEDGE:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.AIRBAG:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.OUTSOLE:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case MC.LOGO:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      // Color
      case COLORS.BLACK:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.GREY:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.SAIL:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.WHITE:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.THERMAL_GREEN:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.RAINFOREST:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.BLUE:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.DARKBLUE:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.PINK:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.RED:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.HONEYCOMB:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      case COLORS.OTHER_PINK:
        console.log(`Received command: |${cleanedCommand}|`)
        break;
      default:
        console.log(`Unrecognized command: |${cleanedCommand}|`)
        break;
    }
  }

  initializeBot() {
    this.client.connect();

    this.client.on('message', (channel, tags, message, self) => {
      console.log(`${tags['display-name']}: ${message}`);
      if (message.slice(0, 4).toLowerCase() === 'cmd:') {
        this.parseCommand(message);
      }
    })
  }
}