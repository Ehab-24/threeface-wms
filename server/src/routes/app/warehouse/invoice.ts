import { Router } from 'express';
import * as invoiceController from '../../../controllers/invoice';

const router: Router = Router();

router
  .route('/:id')
  .get(invoiceController.readOne)
  .patch(invoiceController.updateOne)
  .delete(invoiceController.removeOne);

router
  .route('/')
  .post(invoiceController.createOne)
  .get(invoiceController.readAll)
  .delete(invoiceController.removeAll);


export default router;
