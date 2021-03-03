import { IRCBot } from "./IRCBot";
import { MediaServer } from "./MediaServer";
import { ShoeCustomizer } from "./ShoeCustomizer";

const server = new MediaServer();

const initStream = async () => {
  const shoeCustomizer = new ShoeCustomizer();
  await shoeCustomizer.launchBrowser();
  return await shoeCustomizer.startStream();
};

server.start();

let geminiStream;

(async () => {
  geminiStream = await initStream();
  console.log(geminiStream);
})();
