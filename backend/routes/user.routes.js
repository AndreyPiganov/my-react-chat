import Router from 'express';
import UserController from '../controller/user.controller.js';

const userController = new UserController();

const userRouter = new Router();

userRouter.post('/v1/user', userController.createUser);
userRouter.get('/v1/user', userController.getUsers);
userRouter.get('/v1/user/:id', userController.getUserById);
userRouter.put('/v1/user', userController.updateUser);
userRouter.delete('/v1/user/:id', userController.deleteUser);

export default userRouter;