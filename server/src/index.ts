import http from 'http';
import app from './app';
import connectDB from './database';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, (): void => {
  console.log(`Express is listening at http://localhost:${port}`);
  connectDB('mongodb://localhost:27017/wms');
});

