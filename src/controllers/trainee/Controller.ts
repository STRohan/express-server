import * as express from 'express';
import { successHandler } from './../../libs/routes/successHandler';
class TraineeController {
  public get(req, res) {
    const { skip, limit } = req.query;
    const data = {
      limit,
      skip,
    };
    res.status(200).send(successHandler('success', data, 200));
  }
  public auth(req, res) {
    const { name, email, role } = req.user;
    res.status(200).send(successHandler('success', { name, email, role }, 200));
  }
  public post(req, res, next) {
    const { name, id } = req.body;
    const data = {
      id,
      name,
    };
    if (!name) {
      return next({
        error: 'Invalid',
        message: 'Bad Data Enter the name',
        status: 400,
      });
    }
    if (!id) {
      return next({
        error: 'Invalid',
        message: 'Bad Data Enter the id',
        status: 400,
      });
    } else {
      res.status(200).send(successHandler('Success', data, 200));
    }
  }
  public put(req, res, next) {
    const { id, dataToUpdate } = req.body;
    const data = {
      dataToUpdate: dataToUpdate || ['Changed'],
      id: id || '0',
    };
    res.status(200).send(successHandler('Updated', data, 200));
  }
  public delete(req, res, next) {
    res.status(200).send(successHandler('Deleted', undefined, 200));
  }
}
export default new TraineeController();
