import Router from 'express';
import UserController from '../controller/user.controller.js';
import authMiddleWare from '../middlewares/authMiddleware.js';

const userController = new UserController();

const router = new Router();

router.post('/v1/user', userController.createUser);
router.get('/v1/user', userController.getUsers);
router.get('/v1/user/:id', userController.getUserById);
router.put('/v1/user', userController.updateUser);
router.delete('/v1/user/:id', userController.deleteUser);
router.post('/v1/login', userController.login);
router.post('/v1/registration', userController.registration);
router.get('/v1/auth', authMiddleWare ,userController.check);
// router.post('/v1/logout', userController.logout);
// router.get('/v1/activate/:link', userController.activate);
// router.get('/v1/refresh', userController.refresh);

export default router;