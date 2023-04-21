import { Request, Response } from 'express';
import { UserRequest } from '../interfaces';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models';
import * as emailService from '../services/email';

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
      res.status(404).json({ success: false, message: 'Email does not exist' });
      return;
    }
    if (!user.isVerified) {
      res.status(403).json({ success: false, message: 'Email is not verified' });
      return;
    }
    if (!bcrypt.compareSync(payload.password, user.password)) {
      res.status(401).json({ success: false, message: 'Invalid Password' });
      return;
    }

    const signedToken: string = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        isVerified: user.isVerified,
        displayName: user.displayName,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
        photoURL: user.photoURL,
        warehouse: user.warehouse
      },
      process.env.SECRET,
      { expiresIn: '12h' }
    );

    const lastLogin: Date = new Date();
    await UserModel.updateOne({ _id: user._id }, { lastLogin: lastLogin });

    res.status(200).json({
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
      res.status(409).json({ success: false, message: 'Email already exists' });
      return;
    }

    const hashedPassword: string = await bcrypt.hash(payload.password, 10);
    const user = await UserModel.create({
      displayName: payload.displayName,
      email: payload.email,
      password: hashedPassword,
      warehouse: payload.warehouse,
      photoURL: payload.photoURL
    });

    res.status(201).json({
      success: true,
      data: {
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

export async function sendVerificationCode(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const payload = req.body;
    const userDoc = await UserModel.findOne({ email: payload.email });
    if (!userDoc) {
      res.status(404).json({ success: false, message: 'Email does not exist' });
      return;
    }
    if (userDoc.isVerified) {
      res.status(401).json({ success: false, message: 'Email already verified' });
      return;
    }
    if (!bcrypt.compareSync(payload.password, userDoc.password)) {
      res.status(401).json({ success: false, message: 'Invalid Password' });
      return;
    }

    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    const info = await emailService.sendGmail(
      payload.email,
      process.env.SMTP_EMAIL,
      'Threeface WMS Verification',
      `<p>Verification email for Threeface WMS. </p><p>Your verification code is: <b>${verificationCode}</b></p>`
    );

    userDoc.verification = {
      code: verificationCode,
      expiry: Date.now() + 180000 // 3 minutes
    };
    await userDoc.save();

    res.status(200).json({
      success: true,
      message: `Verification code sent to ${payload.email}`,
      mailInfo: info
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: 'Could not sned verification code',
      error
    });
  }
}

export async function verifyCode(req: Request, res: Response): Promise<void> {
  try {

    console.log(req.body)

    const {
      email,
      password,
      code
    }: {
      email: string;
      password: string;
      code: number;
    } = req.body;

    const userDoc = await UserModel.findOne({ email: email });

    if (userDoc.isVerified) {
      res.status(409).json({ success: false, message: 'Email already verified'});
      return;
    }
    if (Date.now() > userDoc.verification.expiry) {
      res.status(401).json({ success: false, message: 'Verification code expired'});
      return;
    }
    if (!code || code !== userDoc.verification.code) {
      res.status(401).json({ success: false, message: 'Invalid verification code'});
      return;
    }
    if (!bcrypt.compareSync(password, userDoc.password)) {
      res.status(401).json({ success: false, message: 'Invalid password'});
      return;
    }

    userDoc.isVerified = true;
    await userDoc.save();

    const signedToken: string = jwt.sign(
      {
        _id: userDoc._id,
        email: userDoc.email,
        isVerified: userDoc.isVerified,
        displayName: userDoc.displayName,
        createdAt: userDoc.createdAt,
        lastLogin: userDoc.lastLogin,
        photoURL: userDoc.photoURL,
        warehouse: userDoc.warehouse
      },
      process.env.SECRET
    );

    res.status(200).json({
      success: true,
      data: {
        token: signedToken,
        user: {
          _id: userDoc._id,
          email: userDoc.email,
          displayName: userDoc.displayName,
          createdAt: userDoc.createdAt,
          lastLogin: userDoc.lastLogin,
          photoURL: userDoc.photoURL,
          warehouse: userDoc.warehouse
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: 'Internal server error',
      error
    });
  }
}
