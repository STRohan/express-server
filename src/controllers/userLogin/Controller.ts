import { default as UserRepository } from '../../repositories/user/UserRepository';
import { successHandler } from './../../libs/routes/successHandler';

class LogInController {
  public  get(req, res, next) {
    const {name, email} = req.body;
    const repository = new UserRepository();
    const result = repository.findUser(email);
    if (!result) next({error: 'Unauthorized', message: 'Access Denied', status: 406 });

  }
}
export default new LogInController ();
