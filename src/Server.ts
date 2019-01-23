import { config } from "dotenv";
import * as express from "express";
import { configuration } from "./config/configuration";
import { IConfig } from "./config/IConfig";

class Server {
  private app: express.Express;
  constructor(public config: IConfig) {
    this.app = express();
  }

  public bootstrap() {
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
  }

  public run() {
    const {
      app,
      config: { Port }
    } = this;
    this.app.listen(Port, err => {
      if (err) {
        throw err;
      }
    });
    console.log("The app is running");
  }
}
export { Server };
