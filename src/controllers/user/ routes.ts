import * as express from 'express';
import { default as authMiddleWare } from '../../libs/routes/authMiddleWare';
import { default as UserController  } from './Controller';

const UserRoute = express.Router();
const { auth } = UserController;
UserRoute.get('/auth/', authMiddleWare('module', 'write'), auth);
export default UserRoute;
