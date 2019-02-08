import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { default as UserRepository } from '../../repositories/user/UserRepository';
import { successHandler } from './../../libs/routes/successHandler';
class LogInController {
  public async post(req, res, next) {
    const {password, email} = req.body;
    const repository = new UserRepository();
    const result = await repository.findUser({email}).lean();
    if (!result) next({error: 'Unauthorized', message: 'Access Denied', status: 406 });
    const bool = await bcrypt.compare(password, result.password);
    if (bool) {
    const key = process.env.PASSWORD;
    const token = await jwt.sign(result, key, {expiresIn: 15 * 60 });
    res.status(200).send(successHandler('success', token, 200));
    }
    else {
    next({error: 'Unauthorized', message: 'Access Denied', status: 406});
      }
    }
  }
export default new LogInController ();
