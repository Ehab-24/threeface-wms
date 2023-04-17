import { Request, Response, Router } from 'express';
import * as authController from '../controllers/auth';
import { authenticateUser } from '../middleware/auth';

const router: Router = Router();

router.get('/', authenticateUser, (req: Request, res: Response): void => {
  res.status(200).json({
    page: 'Auth',
    success: true,
    authorized: true
  });
});
router.post('/login', authController.login);
router.post('/register', authController.register);

export default router;
