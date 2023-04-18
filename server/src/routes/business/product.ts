import { Router } from 'express';
import * as productController from '../../controllers/product';

const router: Router = Router();

router.route('/')
.get(productController.read)
.post(productController.create)
.patch(productController.update)
.delete(productController.remove);

export default router;
