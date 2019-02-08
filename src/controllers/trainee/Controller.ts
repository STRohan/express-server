import { successHandler } from './../../libs/routes/successHandler';
class TraineeController {
  public get(req, res) {
    const { skip, limit } = req.query;
    res.status(200).send(successHandler('success', { limit, skip }, 200));
  }
  public auth(req, res) {
    const { name, email, role } = req.user;
    res.status(200).send(successHandler('success', { name, email, role }, 200));
  }
  public post(req, res, next) {
    const { name, id } = req.user;
    const data = {id, name};
    if (!name) return next({error: 'Invalid', message: 'Bad Data Enter the name', status: 400});
    if (!id) return next({error: 'Invalid', message: 'Bad Data Enter the id', status: 400});
    res.status(200).send(successHandler('Success', data, 200));
  }
  public put(req, res) {
    const { id, dataToUpdate } = req.user;
    const data = { dataToUpdate: dataToUpdate || ['Changed'], id: id || '0'};
    res.status(200).send(successHandler('Updated', data, 200));
  }
  public delete(req, res) {
    res.status(200).send(successHandler('Deleted', undefined, 200));
  }
}
export default new TraineeController();
