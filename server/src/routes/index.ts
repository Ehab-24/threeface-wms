import express, { Request, Response, Express } from 'express';
import authRouter from './auth';
import vendorRouter from './user';
import customerRouter from './customer';
import productRouter from './product';
import invoiceRouter from './invoice';
import warehouseRouter from './warehouse';
import { authenticateUser } from '../middleware/auth';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

app.use('/auth', authRouter);
app.use('/vendor', authenticateUser, vendorRouter);
app.use('/customer', authenticateUser, customerRouter);
app.use('/product', authenticateUser, productRouter);
app.use('/invoice', authenticateUser, invoiceRouter);
app.use('/warehouse', authenticateUser, warehouseRouter);

export default app;
