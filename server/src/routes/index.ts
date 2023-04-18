import { Router } from 'express';
import authRouter from './auth';
import appRouter from './app';

import { authenticateUser } from '../middleware/auth';

const router: Router = Router();

router.use('/auth', authRouter);
router.use('/app', authenticateUser, appRouter);

export default router;
