import { Request, Response } from 'express';
import { UserRequest } from '../interfaces';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models';

export function defaultRoute(req: UserRequest, res: Response): void {
  res.status(200).json({
    success: true,
    authorized: true,
    user: req.user
  });
}

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const payload = req.body;
    const user = await UserModel.findOne({ email: payload.email });

    if (!user) {
      res.status(404).send('Email does not exist');
      return;
    }
    if (!(await bcrypt.compare(payload.password, user.password))) {
      res.status(401).send('Invalid password');
      return;
    }

    const signedToken: string = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        displayName: user.displayName,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
        photoURL: user.photoURL,
        warehouse: user.warehouse
      },
      process.env.SECRET,
      { expiresIn: '1d' }
    );

    const lastLogin: Date = new Date();
    await UserModel.updateOne({ _id: user._id }, { lastLogin: lastLogin });

    res.status(200).send({
      success: true,
      data: {
        token: signedToken,
        user: {
          _id: user._id,
          email: user.email,
          displayName: user.displayName,
          createdAt: user.createdAt,
          lastLogin: lastLogin,
          photoURL: user.photoURL,
          warehouse: user.warehouse
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: 'Could not log in user',
      error
    });
  }
}

export async function register(req: Request, res: Response): Promise<void> {
  try {
    const payload = req.body;

    if (await UserModel.findOne({ email: payload.email })) {
      res.status(409).send('Email already exists');
      return;
    }

    const hashedPassword: string = await bcrypt.hash(payload.password, 10);
    const user = await UserModel.create({
      displayName: payload.displayName,
      email: payload.email,
      password: hashedPassword,
      warehouse: payload.warehouse,
      photoURL: payload.photoURL,
      createdAt: new Date(),
      lastLogin: new Date()
    });

    user.password = undefined;
    const signedToken: string = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        displayName: user.displayName,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
        photoURL: user.photoURL,
        warehouse: user.warehouse
      },
      process.env.SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      success: true,
      data: {
        token: signedToken,
        user: {
          _id: user._id,
          email: user.email,
          displayName: user.displayName,
          createdAt: user.createdAt,
          lastLogin: user.lastLogin,
          photoURL: user.photoURL,
          warehouse: user.warehouse
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: 'Could not register user',
      error
    });
  }
}
