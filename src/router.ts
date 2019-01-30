import * as express from "express";
import {default as TraineeController,TraineeRouter} from "./controllers/trainee/index";
export const router = express.Router();
router.use("/trainee", TraineeRouter);
