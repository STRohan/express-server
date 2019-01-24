import * as express from "express";
import { successHandler } from "./../../libs/routes/successHandler";
import { stringify } from "querystring";

class TraineeController {
  get(req, res) {
    const { name, id } = req.body;
    const data = {
      name: name,
      id: id
    };

    res.status(200).send(successHandler("success", "yahoo", 200));

    console.log("in controller");
  }

  post(req, res, next) {
    console.log("name");

    const { name, id } = req.body;
    const data = {
      name: name,
      id: id
    };
    if (!name) {
      console.log("name error");
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
    const { name, id } = req.body;
    const data = {
      name: ["Changed"],
      id: "0"
    };

    res.status(200).send(successHandler("updated", data, 200));
  }

  delete(req, res, next) {
    const { name, id } = req.body;
    const data = {
      name: [],
      id: ""
    };
    res.status(200).send(successHandler("deleted", data, 200));
  }
}
export default new TraineeController();
