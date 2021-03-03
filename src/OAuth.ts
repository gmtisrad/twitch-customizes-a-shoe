// Define our dependencies
import * as session from "express-session";
import * as passport from "passport";
import * as OAuth2Strategy from "passport-oauth2";
import * as request from "request";
import handlebars from "handlebars";
import { Application } from "express";
import {
  CALLBACK_URL,
  SESSION_SECRET,
  TWITCH_CLIENT_ID,
  TWITCH_SECRET,
} from "./constants";

// Define a simple template to safely generate HTML with values from user's profile
const template = handlebars.compile(`
<html><head><title>Twitch Auth Sample</title></head>
<table>
    <tr><th>Access Token</th><td>{{accessToken}}</td></tr>
    <tr><th>Refresh Token</th><td>{{refreshToken}}</td></tr>
    <tr><th>Display Name</th><td>{{display_name}}</td></tr>
    <tr><th>Bio</th><td>{{bio}}</td></tr>
    <tr><th>Image</th><td>{{logo}}</td></tr>
</table></html>`);

export class OAuth {
  constructor(app: Application) {
    // Initialize Express and middlewares
    app.use(
      session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
      })
    );
    app.use(passport.initialize());
    app.use(passport.session());

    // Override passport profile function to get user profile from Twitch API
    OAuth2Strategy.prototype.userProfile = (accessToken, done) => {
      const options = {
        url: "https://api.twitch.tv/helix/users",
        method: "GET",
        headers: {
          "Client-ID": TWITCH_CLIENT_ID,
          Accept: "application/vnd.twitchtv.v5+json",
          Authorization: "Bearer " + accessToken,
        },
      };

      request(options, (error: any, response: any, body: string) => {
        if (error) console.error(error);

        if (response && response.statusCode == 200) {
          done(null, JSON.parse(body));
        } else {
          done(JSON.parse(body));
        }
      });
    };

    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.deserializeUser((user, done) => {
      done(null, user);
    });

    passport.use(
      "twitch",
      new OAuth2Strategy(
        {
          authorizationURL: "https://id.twitch.tv/oauth2/authorize",
          tokenURL: "https://id.twitch.tv/oauth2/token",
          clientID: TWITCH_CLIENT_ID,
          clientSecret: TWITCH_SECRET,
          callbackURL: CALLBACK_URL,
          state: true,
        },
        (
          accessToken: string,
          refreshToken: string,
          profile: Record<string, any>,
          done: (arg: any, profile: Record<string, any>) => void
        ) => {
          profile.accessToken = accessToken;
          profile.refreshToken = refreshToken;

          // Securely store user profile in your DB
          //User.findOrCreate(..., function(err, user) {
          //  done(err, user);
          //});

          done(null, profile);
        }
      )
    );

    // Set route to start OAuth link, this is where you define scopes to request
    app.get(
      "/auth/twitch",
      passport.authenticate("twitch", { scope: "user_read" })
    );

    // Set route for OAuth redirect
    app.get(
      "/auth/twitch/callback",
      passport.authenticate("twitch", {
        successRedirect: "/",
        failureRedirect: "/",
      })
    );

    // If user has an authenticated session, display it, otherwise display link to authenticate
    app.get("/home", (req: any, res) => {
      console.log(req);
      if (req.session && req.session.passport && req.session.passport.user) {
        res.send(template(req.session.passport.user));
      } else {
        res.send(
          '<html><head><title>Twitch Auth Sample</title></head><a href="/auth/twitch"><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"></a></html>'
        );
      }
    });
  }
}

export default OAuth;
