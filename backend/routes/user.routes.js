import Router from 'express';
import UserController from '../controller/user.controller.js';

const userController = new UserController();

const router = new Router();

router.post('/v1/user', userController.createUser);
router.get('/v1/user', userController.getUsers);
router.get('/v1/user/:id', userController.getUserById);
router.put('/v1/user', userController.updateUser);
router.delete('/v1/user/:id', userController.deleteUser);

export default router;