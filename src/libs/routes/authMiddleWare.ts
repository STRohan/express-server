import * as jwt from 'jsonwebtoken';
import { default as Repository } from '../../repositories/user/UserRepository';
import { hasPermission } from './hasPermissions';
const userRepository = new Repository();
export default (module, permissionstype) => (req, res, next) => {
  const Token = req.header('Authorization');
  jwt.verify(Token, process.env.KEY, (err, result) => {
    if (err) {
      return next({
        error: 'Unauthorized',
        message: 'Access Denied',
        status: 401,
      });
    }
    const { name, email, role } = result;
    try {
      userRepository.findUser({name}).then((respond) => {
        if (respond) {
          req.body = respond;
          if (!hasPermission(module, result.role, permissionstype)) {
            next({
              error: 'Unauthorized Access',
              message: 'Permission Not Granted',
              status: 401,
            });
          }
          next();
        }
        next({ error: 'Unauthorized', message: 'Access Denied', status: 401 });
        });
    } catch (err) {
      next({ error: 'Error', message: err , status: 401 });
    }
  });
};
