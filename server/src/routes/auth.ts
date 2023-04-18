import { Router } from 'express';
import * as authController from '../controllers/auth';
import { authenticateUser } from '../middleware/auth';

const router: Router = Router();

router.get('/', authenticateUser, authController.defaultRoute);
router.post('/login', authController.login);
router.post('/register', authController.register);

export default router;
