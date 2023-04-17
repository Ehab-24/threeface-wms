import { Router } from 'express';
import * as invoiceController from '../controllers/invoice';

const router: Router = Router();

router.route('/')
.get(invoiceController.read)
.post(invoiceController.create)
.patch(invoiceController.update)
.delete(invoiceController.remove);

export default router;
