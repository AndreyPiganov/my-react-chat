import Router from 'express';
import UserController from '../controller/user.controller.js';

const userController = new UserController();

const router = new Router();

router.post('/user', userController.createUser);
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUserById);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);

export default router;