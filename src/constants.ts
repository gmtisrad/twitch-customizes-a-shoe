// OAuth Constants
export const TWITCH_CLIENT_ID = 'qv41gsbfyp8zwjsqqedmbzp5cmdv1e';
export const TWITCH_SECRET    = 'avgsmdsflyz631fp3434ciy315utmz';
export const SESSION_SECRET   = 'abcd';
export const CALLBACK_URL     = 'http://localhost:3000/auth/twitch/callback';  // You can run locally with - http://localhost:3000/auth/twitch/callback
export const ACCESS_TOKEN     = 'biguw984dtfryahbj6pimrw72atnwf' // DO NOT UPLOAD ANYWHERE. VERY BAD.
export const REFRESH_TOKEN    = '7e3qbeudiqxx9e2utzj551j7o3ry2pag03ciek9ka8njrfy3qh';
export const STREAM_KEY       = 'live_656709798_12R8xaIUcHRW7cLoj5hE2q7KqQR6Uu';
export const RTMP_SERVER      = `rtmp://sfo.contribute.live-video.net/live/${STREAM_KEY}`;

export enum MC {
  BASE = "base",
  OVERLAY = "overlay",
  MUDGUARD = "mudguard",
  SWOOSH = "swoosh",
  EYESTAY = "eyestay",
  UPPER_EYESTAY = "uppereyestay",
  BACKTAB = "backtab",
  LACES = "laces",
  LINING = "lining",
  MIDSOLE = "midsole",
  WEDGE = "wedge",
  AIRBAG = "airbag",
  OUTSOLE = "outsole",
  LOGO = "logo"
}

export enum COLORS {
  BLACK = "black",
  GREY = "grey",
  SAIL = "sail",
  WHITE = "white",
  THERMAL_GREEN = "thermalgreen",
  RAINFOREST = "rainforest",
  BLUE = "blue",
  DARKBLUE = "darkblue",
  PINK = "pink",
  RED = "red",
  HONEYCOMB = "honeycomb",
  OTHER_PINK = "otherpink"
}