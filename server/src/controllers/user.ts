import { Response } from 'express';
import { UserRequest } from '../interfaces';

const read = (req: UserRequest, res: Response): void => {
  if (!req.user) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
    return;
  }
  res.send(req.user);
};

const create = (req: UserRequest, res: Response): void => {
  res.status(201).json({
    success: true,
    message: 'User created successfully'
  });
};

const update = (req: UserRequest, res: Response): void => {
  res.status(200).json({
    success: true,
    message: 'User updated successfully'
  });
};

const remove = (req: UserRequest, res: Response): void => {
  res.status(204).json({
    success: true,
    message: 'User created successfully'
  });
};

export { create, remove, update, read };
