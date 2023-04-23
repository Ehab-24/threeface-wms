import { NextFunction, Response } from 'express';
import { UserRequest } from '../interfaces';
import { User } from '../types';
import { UserModel } from '../models';
import jwt from 'jsonwebtoken';

export async function authenticateUser(
  req: UserRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    let token = req.headers['authorization'];
    token = token.substring(7);
    const user = jwt.verify(token, process.env.SECRET) as User;
    if (!user.isVerified) {
      res
        .status(403)
        .json({ success: false, message: 'Email is not verified' });
      return;
    }

    const userDoc = await UserModel.findOne({ _id: user._id });

    req.user = user;
    req.user.warehouse = userDoc.warehouse?.toString();
    req.user.role = userDoc.role;
    req.user.displayName = userDoc.displayName;
    req.user.photoURL = userDoc.photoURL;

    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
}
