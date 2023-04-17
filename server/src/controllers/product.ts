import { Response } from 'express';
import { UserRequest } from '../interfaces';

const read = (req: UserRequest, res: Response): void => {
  res.status(200).json({
    success: true,
    message: 'Product read successfully'
  });
};

const create = (req: UserRequest, res: Response): void => {
  res.status(201).json({
    success: true,
    message: 'Product created successfully'
  });
};

const update = (req: UserRequest, res: Response): void => {
  res.status(200).json({
    success: true,
    message: 'Product updated successfully'
  });
};

const remove = (req: UserRequest, res: Response): void => {
  res.status(204).json({
    success: true,
    message: 'Product created successfully'
  });
};

export { create, remove, update, read };
