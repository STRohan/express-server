import * as express from "express";
import { successHandler } from "./../../libs/routes/successHandler";
class TraineeController {
  get(req, res) {
    const { skip, limit } = req.query;
    const data = {
      skip,
      limit
    };
    res.status(200).send(successHandler("success", data, 200));
  }
  auth(req, res) {
    const { name, email, role } = req.user;
    res.status(200).send(successHandler("success", { name, email, role }, 200));
  }
  post(req, res, next) {
    const { name, id } = req.body;
    const data = {
      name,
      id
    };
    if (!name) {
      return next({
        error: "Invalid",
        message: "Bad Data Enter the name",
        status: 400
      });
    }
    if (!id) {
      return next({
        error: "Invalid",
        message: "Bad Data Enter the id",
        status: 400
      });
    } else res.status(200).send(successHandler("Success", data, 200));
  }
  put(req, res, next) {
    const { id, dataToUpdate } = req.body;
    const data = {
      id: id || "0",
      dataToUpdate: dataToUpdate || ["Changed"]
    };
    res.status(200).send(successHandler("Updated", data, 200));
  }
  delete(req, res, next) {
    res.status(200).send(successHandler("Deleted", null, 200));
  }
}
export default new TraineeController();
