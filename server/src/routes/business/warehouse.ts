import { Router } from 'express';
import * as warehouseController from '../../controllers/warehouse';

const router: Router = Router();

router.route('/')
.get(warehouseController.read)
.post(warehouseController.create)
.patch(warehouseController.update)
.delete(warehouseController.remove);

export default router;
