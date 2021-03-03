// Define our dependencies
import * as express from 'express';
import OAuth from './OAuth';

export class MediaServer {
  app: express.Application;

  constructor () {
    var app = express();

    app.get('/', express.static('public'));
    app.use('/public', express.static('public'));

    // Apply middleware routes
    new OAuth(app);
    
    this.app = app;
  }

  start = () => {
    this.app.listen(3000, function () {
      console.log('Twitch auth sample listening on port 3000!')
    });
  }
}

export default MediaServer;