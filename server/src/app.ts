import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import apiRouter from './routes/index';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response): void => {
  res.send('Server is running');
});

app.use('/api', apiRouter);

app.all('*', (req: Request, res: Response): void => {
  res.status(404).send('Not Found');
});

export default app;