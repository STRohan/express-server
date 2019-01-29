import * as express from "express";
import { successHandler } from "./../../libs/routes/successHandler";
import { stringify } from "querystring";

class TraineeController {
  get(req, res) {
    const { skip, limit } = req.query;
    const data = {
      skip,
      limit
    };

    res.status(200).send(successHandler("success", data, 200));
  }

  post(req, res, next) {
    const { name, id } = req.body;
    const data = {
      name,
      id
    };
    if (!name) {
      return next({
        error: "Bad Data Enter the name",
        message: "error",
        status: 400
      });
    }
    if (!id) {
      return next({
        error: "Bad Data Enter the ",
        message: "error",
        status: 400
      });
    } else {
      res.status(200).send(successHandler("success", data, 200));
    }
  }

  put(req, res, next) {
    console.log("put1");
    const { id, dataToUpdate } = req.body;
    const data = {
      id: id || "0",
      dataToUpdate: dataToUpdate || ["Changed"]
    };

    res.status(200).send(successHandler("updated", data, 200));
  }

  delete(req, res, next) {
    // const {id } = req.param;
    res.status(200).send(successHandler("success deleted", 200, null));
  }
}
export default new TraineeController();
