import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

export default function (url: string): void {
  mongoose.connect(url);
  mongoose.connection.on('connected', () => {
    console.log('Connected to database');
  });
  mongoose.connection.on('error', (err) => {
    console.log('Error connecting to database', err);
  });
}
