import { Router } from 'express';
import * as customerController from '../../../controllers/customer';

const router: Router = Router();

router
  .route('/:id')
  .get(customerController.readOne)
  .patch(customerController.updateOne)
  .delete(customerController.removeOne);

router
  .route('/')
  .post(customerController.createOne)
  .get(customerController.readAll)
  .delete(customerController.removeAll);


export default router;
