import * as express from 'express';
import { default as authMiddleWare } from '../../libs/routes/authMiddleWare';
import { validation, validationHandler } from '../trainee';
import { default as logInController } from './Controller';

const userLogInRoute = express.Router();
const {create} = validation;
const {get} = logInController;
userLogInRoute.post('/', validationHandler(create), get);
export default  userLogInRoute;
