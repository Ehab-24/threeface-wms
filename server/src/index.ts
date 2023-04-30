import http from 'http';
import app from './app';
import connectDB from './database';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT|| 3000;

const server = http.createServer(app);
server.listen(port, (): void => {
  console.log(`Express is listening at http://localhost:${port}`);
  connectDB('mongodb+srv://bscs21046:ahmad37075477@cluster0.gbfhaa9.mongodb.net/?retryWrites=true&w=majority');
});

