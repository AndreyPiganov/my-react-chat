import Router from 'express';
import LoginController from '../controller/login.controller.js';

const loginController = new LoginController();

const loginRouter = new Router();

loginRouter.post('/v1/login', loginController.logIn)

export default loginRouter;