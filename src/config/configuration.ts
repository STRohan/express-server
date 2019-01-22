import { IConfig } from "./IConfig";
import { config } from "dotenv";
config();
const configuration : IConfig = Object.freeze({
  Port: process.env.PORT
});

console.log(configuration);
export { configuration };

