import * as bodyParser from 'express';
import * as express from 'express';
import { configuration } from './config/configuration';
import { IConfig } from './config/IConfig';
import Database from './libs/Database';
import { errorHandler, notFoundRoute, validationHandler } from './libs/routes';
import { router } from './router';

class Server {
  private app: express.Express;
  constructor(public config: IConfig) {
    this.app = express();
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    const {
      app,
      config: { Port },
    } = this;
    this.app.use(' /health-check ', (req, res) => {
      res.send(' I am Ok ');
    });
    app.use('/api', router);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }
  public run() {
    const {
      app,
      config: { Port, MONGO_URL },
    } = this;
    Database.open(MONGO_URL)
      .then((result) => {
        console.log('Conected');
        app.listen(Port, (err) => {
          if (err) { throw err; }
          console.log('app is running at', Port);
        });
      })
      .catch((err) => {
        console.log('Error Occurred');
      });
  }
  private initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    return this;
  }
}
export { Server };
