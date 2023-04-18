import { UserRequest } from '../interfaces';
import { Response, NextFunction } from 'express';
import { WarehouseModel } from '../models';

export async function setUserWarehouse(req: UserRequest, res: Response, next: NextFunction): Promise<void> {
  const warehouse = await WarehouseModel.findOne({ vendors: req.user._id });
  console.log("🚀 ~ file: app.ts:7 ~ setUserWarehouse ~ warehouse:", warehouse)
  if (!warehouse) {
    res.status(400).json({
      success: false,
      message: 'Bad request: Curently logged in user has no warehouse'
    });
    return;
  }
  req.user.warehouse = warehouse._id.toString();

  next();
}
