import { UserRequest } from '../interfaces';
import { Response, NextFunction } from 'express';
import { WarehouseModel } from '../models';

export async function setUserWarehouse(req: UserRequest, res: Response, next: NextFunction): Promise<void> {
  const warehouse = await WarehouseModel.findOne({ _id: req.user.warehouse });
  if (!warehouse) {
    res.status(400).json({
      success: false,
      message: 'Curently logged in user has no warehouse'
    });
    return;
  }
  req.user.warehouse = warehouse._id.toString();

  next();
}
