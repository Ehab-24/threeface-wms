import { Response } from 'express';
import { UserRequest } from '../interfaces';
import { User } from '../types';
import { UserModel } from '../models';

export function read(req: UserRequest, res: Response): void {
  res.send(req.user);
}

export async function update(req: UserRequest, res: Response): Promise<void> {
  try {
    const payload: User = req.body;

    const user = await UserModel.findOneAndUpdate(
      { _id: req.user._id },
      { payload }
    );

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Bad request',
      error
    });
    return;
  }
}

export async function remove(req: UserRequest, res: Response): Promise<void> {
  try {
    const result = await UserModel.deleteOne({ _id: req.user._id });
    res.status(202).send(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error
    });
    return;
  }
}
