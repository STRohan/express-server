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
    const { name } = result;
    try {
      userRepository.findUser({ name }).then((respond) => {
        if (respond) {
          req.user = respond;
          if (!hasPermission(module, respond.role, permissionstype)) {
            next({
              error: 'Unauthorized Access',
              message: 'Permission Not Granted',
              status: 401,
            });
          }
          return next();
        }
        next({ error: 'Unauthorized', message: 'Access Denied', status: 401 });
      });
    } catch (err) {
      next({ error: 'Error', message: err, status: 401 });
    }
  });
};
