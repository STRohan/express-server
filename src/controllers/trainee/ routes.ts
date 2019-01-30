import { default as TraineeController } from "./Controller";
import * as express from "express";
import {default as validation} from './validation'
import {default as validationHandler} from "../../libs/routes/validationHandler"
import{default as authMiddleWare}from"../../libs/routes/authMiddleWare"
const TraineeRoute = express.Router();


TraineeRoute.get("/", validationHandler(validation.get ),TraineeController.get);
TraineeRoute.post("/",  validationHandler(validation.create ),TraineeController.post);
TraineeRoute.put("/?",  validationHandler(validation.update ),TraineeController.put);
TraineeRoute.delete("/?:id",  validationHandler(validation.delete ),TraineeController.delete);
TraineeRoute.get("/auth/", authMiddleWare('module','delete' ),TraineeController.auth);


export default TraineeRoute;
