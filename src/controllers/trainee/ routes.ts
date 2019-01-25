import { default as TraineeController } from "./Controller";
import * as express from "express";
import {default as validation} from './validation'
import {default as validationHandler} from "../../libs/routes/validationHandler"
const TraineeRoute = express.Router();


TraineeRoute.get("/", validationHandler(validation.get ),TraineeController.get);
TraineeRoute.post("/",  validationHandler(validation.create ),TraineeController.post);
TraineeRoute.put("/",  validationHandler(validation.update ),TraineeController.put);
TraineeRoute.delete("/",  validationHandler(validation.delete ),TraineeController.delete);

export default TraineeRoute;
