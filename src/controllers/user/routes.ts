import * as express from 'express';
import { default as authMiddleWare } from '../../libs/routes/authMiddleWare';
import { default as validationHandler } from '../../libs/routes/validationHandler';
import { default as validation } from '../trainee/validation';
import { default as UserController  } from './Controller';

const UserRoute = express.Router();
const { auth, put, delete: del , get } = UserController;
const { get: valGet, create} = validation;
UserRoute.get('/', authMiddleWare('module', 'read'), validationHandler(valGet), get);
UserRoute.post('/auth/', authMiddleWare('module', 'read'), validationHandler(create), auth);
UserRoute.put('/auth/', authMiddleWare('module', 'write'), validationHandler(create), put);
UserRoute.delete('/auth/', authMiddleWare('module', 'write'), validationHandler(create), del );
export default UserRoute;
