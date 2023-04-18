import { Router, Response } from 'express';
import { UserRequest } from '../../interfaces';
import userRouter from './user';
import warehouseRouter from './warehouse';

const router: Router = Router();

router.get('/', (req: UserRequest, res: Response) => {
  res.send('User is authenticated!');
});
router.use('/user', userRouter);
router.use('/warehouse', warehouseRouter);

export default router;
