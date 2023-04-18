import { Router } from 'express';
import * as productController from '../../../controllers/product';

const router: Router = Router();

router
  .route('/:id')
  .get(productController.readOne)
  .patch(productController.updateOne)
  .delete(productController.removeOne);

router
  .route('/')
  .post(productController.createOne)
  .get(productController.readAll)
  .delete(productController.removeAll);

export default router;
