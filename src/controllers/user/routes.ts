import * as express from 'express';
import { default as authMiddleWare } from '../../libs/routes/authMiddleWare';
import { default as UserController  } from './Controller';

const UserRoute = express.Router();
const { auth, put, delete: del } = UserController;
UserRoute.get('/auth/', authMiddleWare('module', 'read'), auth);
UserRoute.put('/auth/', authMiddleWare('module', 'write'), put);
UserRoute.delete('/auth/', authMiddleWare('module', 'write'), del );
export default UserRoute;
