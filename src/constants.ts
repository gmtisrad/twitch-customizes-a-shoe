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

export const MC_ID_MAP = {
  BASE : "Base",
  OVERLAY : "Overlay",
  MUDGUARD : "Mudguard",
  SWOOSH : "Swoosh",
  EYESTAY : "EyestayLogoWindow",
  UPPER_EYESTAY : "UpperEyestay",
  BACKTAB : "Backtab",
  LACES : "Laces",
  LINING : "Lining",
  MIDSOLE : "Midsole",
  WEDGE : "MidsoleWedge",
  AIRBAG : "Airbag",
  OUTSOLE : "Outsole",
  LOGO : "BacktabLogo"
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

export const COLOR_ID_MAP = {
  black: 'Black',
  grey: 'SmokeGrey',
  sail: 'Sail',
  white: 'White',
  thermalgreen: 'ThermalGreen',
  rainforest: 'Rainforest',
  blue: 'GameRoyal',
  darkblue: 'BlueVoid',
  pink: 'MagicFlamingo',
  red: 'UniversityRed',
  honeycomb: 'Honeycomb',
  otherpink: 'MagicEmber'
}

export const MC_ID_TO_Q_MAP = {
  Airbag: "AM90EssSP20_cl:Airbag:AirbagColor",
  Backtab: "AM90EssSP20_cl:Backtab:BacktabColor",
  Logo: "AM90EssSP20_cl:BacktabLogo:BacktabLogoColor",
  Base: "AM90EssSP20_cl:Base:BaseColor",
  EyestayLogoWindow: "AM90EssSP20_cl:EyestayLogoWindow:EyestayLogoWindowColor",
  Laces: "AM90EssSP20_cl:Laces:LacesColor",
  Lining: "AM90EssSP20_cl:Lining:LiningColor",
  Midsole: "AM90EssSP20_cl:Midsole:MidsoleColor",
  MidsoleWedge: "AM90EssSP20_cl:MidsoleWedge:MidsoleWedgeColor",
  Mudguard: "AM90EssSP20_cl:Mudguard:MudguardColor",
  Outsole: "AM90EssSP20_cl:Outsole:OutsoleColor",
  Overlay: "AM90EssSP20_cl:Overlay:OverlayColor",
  Swoosh: "AM90EssSP20_cl:Swoosh:SwooshColor",
  UpperEyestay: "AM90EssSP20_cl:UpperEyestay:UpperEyestayColor",
}