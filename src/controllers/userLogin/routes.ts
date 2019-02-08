import * as express from 'express';
import { default as authMiddleWare } from '../../libs/routes/authMiddleWare';
import { validation, validationHandler } from '../trainee';
import { default as logInController } from './Controller';

const userLogInRoute = express.Router();
const {createLogIn} = validation;
const {post} = logInController;
userLogInRoute.post('/', validationHandler(createLogIn), post);
export default  userLogInRoute;
