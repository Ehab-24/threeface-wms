import { Router } from 'express';
import authRouter from './auth';
import businessRouter from './business';
import { authenticateUser } from '../middleware/auth';

const router: Router = Router();

router.use('/', authenticateUser, businessRouter);
router.use('/auth', authRouter);

export default router;
