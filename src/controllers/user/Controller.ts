import { default as UserRepository } from '../../repositories/user/UserRepository';
import { successHandler } from './../../libs/routes/successHandler';
class UserController {
  public auth(req, res) {
    const { name, email, role } = req.user;
    res.status(200).send(successHandler('success', { name, email, role }, 200));
  }
  public async put(req, res, next) {
    try {
    const data = req.user;
    const repository = new UserRepository();
    const change = req.body;
    await repository.update (data, change);
    const{password , ...temp} = change;
    res.status(200).send(successHandler('File Updated', temp, 200));
  }
    catch (err) {
      next ({error: 'Invalid Request', messages: 'File Does Not Exist', status: 400});
    }
  }
  public async get(req, res, next) {
    try {
    const {skip= 0 , limit = 10} = req.query;
    const data = { skip, limit , role: 'head-trainer'};
    const repository = new UserRepository();
    const result = await repository.findLog(data);
    if (!result) next({error: 'Unauthorized', message: 'Access Denied', status: 406 });
    const count = await repository.countLog(data);
    res.send({User_Logs: result, count });
    } catch (err) {
      next ({error: 'Invalid Request', messages: 'File Does Not Exist', status: 400});
    }}
  public async delete(req, res, next) {
    try {
    const data = req.user;
    const repository = new UserRepository();
    await repository.delete (data);
    res.status(200).send(successHandler('success', 'File Deleted', 200));
  }
  catch (err) {
    next ({error: 'Invalid Request', messages: 'File Does Not Exist', status: 400});
  }}
}
export default new UserController();
