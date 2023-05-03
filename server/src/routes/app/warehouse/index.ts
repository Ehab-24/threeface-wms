import { Router } from 'express';
import * as warehouseController from '../../../controllers/warehouse';
import productRouter from './product'
import invoiceRouter from './invoice'
import customerRouter from './customer'
import supplierRouter from './supplier'
import invitationRouter from './invitation'
import { setUserWarehouse } from '../../../middleware/app';

const router: Router = Router();

router.route('/')
.get(warehouseController.read)
.post(warehouseController.create)
.patch(warehouseController.update)
.delete(warehouseController.remove);

router.use('/product', setUserWarehouse, productRouter);
router.use('/invoice', setUserWarehouse, invoiceRouter);
router.use('/customer', setUserWarehouse, customerRouter);
router.use('/supplier', setUserWarehouse, supplierRouter);
router.use('/invitation', setUserWarehouse, invitationRouter);

export default router;
