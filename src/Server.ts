import * as bodyParser from "express";
import { config } from "dotenv";
import * as express from "express";
import { configuration } from "./config/configuration";
import { IConfig } from "./config/IConfig";
import { notFoundRoute, errorHandler, validationHandler } from "./libs/routes";
import { router } from "./router";
import Database from "./libs/Database";

class Server {
  private app: express.Express;
  constructor(public config: IConfig) {
    this.app = express();
  }
  private initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    return this;
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    const {
      app,
      config: { Port }
    } = this;
    this.app.use("/health-check", (req, res) => {
      res.send(" I am Ok ");
    });
    app.use("/api", router);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }
  public run() {
    const {
      app,
      config: { Port, MONGO_URL }
    } = this;
    Database.open(MONGO_URL)
      .then(result => {
        console.log("Conected");
        app.listen(Port, err => {
          if (err) throw err;
          console.log("app is running at", Port);
        });
      })
      .catch(err => {
        console.log("Error Occurred");
      });
  }
}
export { Server };
