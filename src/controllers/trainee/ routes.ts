import { default as TraineeController } from "./Controller";
import * as express from "express";
import {default as validation} from './validation'
import {default as validationHandler} from "../../libs/routes/validationHandler"
import{default as authMiddleWare}from"../../libs/routes/authMiddleWare"
const TraineeRoute = express.Router();
const{get:valGet,create,update,delete:valDelete}=validation;
const{get,post,put,delete:del,auth}=TraineeController;

TraineeRoute.get("/", validationHandler(valGet ),get);
TraineeRoute.post("/",  validationHandler(create ),post);
TraineeRoute.put("/?",  validationHandler(update ),put);
TraineeRoute.delete("/?:id",  validationHandler(valDelete ),del);
TraineeRoute.get("/auth/", authMiddleWare('module',"read" ),auth);


export default TraineeRoute;
