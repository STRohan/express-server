import { error } from 'util';
import { default as UserRepository } from '../../repositories/user/UserRepository';
import { successHandler } from './../../libs/routes/successHandler';
class UserController {
  public auth(req, res) {
    const { name, email, role } = req.user;
    res.status(200).send(successHandler('success', { name, email, role }, 200));
  }
  public put(req, res, next) {
    try {
    const data = req.user;
    const repository = new UserRepository();
    const change = req.body;
    repository.update (data, change);
    res.status(200).send(successHandler('File Updated', change, 200));
  }
    catch (err) {
      next ({error: 'Invalid Request', messages: 'File Does Not Exist', staus: 400});
    }
  }
  public delete(req, res, next) {
    try {
    const data = req.user;
    const repository = new UserRepository();
    repository.delete (data);
    res.status(200).send(successHandler('success', 'File Deleted', 200));
  }
  catch (err) {
    next ({error: 'Invalid Request', messages: 'File Does Not Exist', staus: 400});
  }}
}
export default new UserController();
