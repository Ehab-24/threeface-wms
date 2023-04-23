import { Response } from 'express';
import { UserRequest } from '../interfaces';
import { UserModel, WarehouseModel } from '../models';
import { Warehouse } from '../types';

// **************************************************************
// * CRUD for warehouse of the currently logged in user
// **************************************************************

export async function read(req: UserRequest, res: Response): Promise<void> {
  try {
    const warehouse = await WarehouseModel.findOne({ _id: req.user.warehouse });
    res.status(200).json({
      success: true,
      data: warehouse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error
    });
  }
}

export async function create(req: UserRequest, res: Response): Promise<void> {
  try {
    const payload = req.body as Warehouse & Omit<Warehouse, 'createdAt'>;

    const warehouse = await WarehouseModel.create(payload);

    // Assign warehouse to user
    await UserModel.updateOne(
      { _id: req.user._id },
      { warehouse: warehouse._id, role: 'owner' }
    );

    res.status(201).json({
      success: true,
      message: 'Warehouse created successfully',
      data: warehouse
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Bad request',
      error
    });
  }
}

export async function update(req: UserRequest, res: Response): Promise<void> {
  try {
    const payload: Warehouse = req.body;
    const response = await WarehouseModel.findOneAndUpdate(
      { _id: req.user.warehouse },
      payload,
      { new: true, upsert: false }
    );
    res.status(200).json({
      success: true,
      message: 'Warehouse updated successfully',
      data: response
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Bad request',
      error
    });
  }
}

export async function remove(req: UserRequest, res: Response): Promise<void> {
  try {
    const result = await WarehouseModel.deleteOne({ _id: req.user.warehouse });
    res.status(202).send(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error
    });
  }
}
