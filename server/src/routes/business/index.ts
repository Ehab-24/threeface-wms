import { Router } from 'express';
import vendorRouter from './user';
import customerRouter from './customer';
import productRouter from './product';
import invoiceRouter from './invoice';
import warehouseRouter from './warehouse';

const router: Router = Router();

router.get('/', (req, res) => {
  res.send('API is running!');
});

router.use('/vendor', vendorRouter);
router.use('/customer', customerRouter);
router.use('/product', productRouter);
router.use('/invoice', invoiceRouter);
router.use('/warehouse', warehouseRouter);

export default router;
