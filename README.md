# Setup
1. Run `yarn`
2. Create a `secrets.ts` file in the src file
3. Create the following constants and assign the corresponding values from your twitch account and the OAuth process at `localhost:3000/home` 
 * `export const TWITCH_CLIENT_ID`
 * `export const TWITCH_SECRET`
 * `export const SESSION_SECRET`
 * `export const CALLBACK_URL`
 * `export const ACCESS_TOKEN`
 * `export const REFRESH_TOKEN`
 * `export const STREAM_KEY`
 * `export const RTMP_SERVER`
4. You should now see logs for every new frame and updates from FFMPEG about the encoding process in the console.