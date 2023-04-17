import { Router } from 'express';
import * as userController from '../controllers/user';

const router: Router = Router();

router.route('/')
.get(userController.read);

export default router;
