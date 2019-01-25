import { default as TraineeController } from "./Controller";
import * as express from "express";
const TraineeRoute = express.Router();

TraineeRoute.get("/", TraineeController.get);
TraineeRoute.post("/", TraineeController.post);
TraineeRoute.put("/", TraineeController.put);
TraineeRoute.delete("/", TraineeController.delete);

export default TraineeRoute;
