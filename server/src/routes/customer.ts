import { Router } from 'express';
import * as customerController from '../controllers/customer';

const router: Router = Router();

router.route('/')
.get(customerController.read)
.post(customerController.create)
.patch(customerController.update)
.delete(customerController.remove);

export default router;
