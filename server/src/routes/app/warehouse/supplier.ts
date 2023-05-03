import { Router } from 'express';
import * as supplierController from '../../../controllers/supplier';

const router: Router = Router();

router
  .route('/:id')
  .get(supplierController.readOne)
  .patch(supplierController.updateOne)
  .delete(supplierController.removeOne);

router
  .route('/')
  .post(supplierController.createOne)
  .get(supplierController.readAll)
  .delete(supplierController.removeAll);


export default router;
