import * as jwt from 'jsonwebtoken';
import { default as Repository } from '../../repositories/user/UserRepository';
import { hasPermission } from './hasPermissions';
const userRepository = new Repository();
export default (module, permissionsType) => async (req, res, next) => {
  const Token = await req.header('Authorization');
  jwt.verify(Token, process.env.KEY, async (err, result) => {
    if (err) return next({error: 'Unauthorized', message: 'Access Denied', status: 401});
    const { name } = result;
    try {
      const respond = await userRepository.findUser({ name });
      if (respond) {
          req.user = respond;
          if (!hasPermission(module, respond.role, permissionsType)) {
            next({
              error: 'Unauthorized Access',
              message: 'Permission Not Granted',
              status: 401,
            });
          }
          return next();
        }
      next({ error: 'Unauthorized', message: 'Access Denied', status: 401 });
      }
      catch (err) {
      next({ error: 'Error', message: err, status: 401 });
    }
  });
};
