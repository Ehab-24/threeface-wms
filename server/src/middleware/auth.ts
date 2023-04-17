import { NextFunction, Response } from 'express';
import { UserRequest } from '../interfaces';
import { User } from '../types';
import jwt from 'jsonwebtoken';

export function authenticateUser(
  req: UserRequest,
  res: Response,
  next: NextFunction
): void {
  try {
    let token = req.headers['authorization'];
    token = token.substring(7);
    req.user = jwt.verify(token, process.env.SECRET) as User;

    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
}
