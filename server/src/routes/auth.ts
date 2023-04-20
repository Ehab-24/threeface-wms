import { Router } from 'express';
import * as authController from '../controllers/auth';
import { authenticateUser } from '../middleware/auth';

const router: Router = Router();

router.get('/', authenticateUser, authController.defaultRoute);
router.post('/login', authController.login);
router.post('/register', authController.register);
router.patch('/send-code', authController.sendVerificationCode);
router.patch('/verify-code', authController.verifyCode);

export default router;
