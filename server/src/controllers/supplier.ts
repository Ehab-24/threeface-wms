import { Response } from 'express';
import { UserRequest } from '../interfaces';
import { SupplierModel } from '../models';
import { Supplier, PageInfo } from '../types';
import { extendPipeline, getPageInfo } from '../shared/utils';
import mongoose from 'mongoose';

// **************************************************************
// * CRUD for Suppliers of the currently logged in user
// ! Requests do not require 'warehouse' field
// **************************************************************

export async function readAll(req: UserRequest, res: Response): Promise<void> {
  try {
    if (!req.user.warehouse) {
      res.status(400).json({
        success: false,
        message: 'Curently logged in user has no warehouse'
      });
      return;
    }

    const pipeline = [
      { $match: { warehouse: new mongoose.Types.ObjectId(req.user.warehouse) } }
    ];
    const { limit, page }: { limit: number; page: number } = extendPipeline(
      pipeline,
      req
    );
    const Suppliers = await SupplierModel.aggregate(pipeline);
    const pageInfo: PageInfo = getPageInfo(Suppliers, page, limit);

    res.status(200).json({
      success: true,
      data: Suppliers,
      pageInfo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error
    });
  }
}

export async function readOne(req: UserRequest, res: Response): Promise<void> {
  try {
    if (!req.user.warehouse) {
      res.status(400).json({
        success: false,
        message: 'Curently logged in user has no warehouse'
      });
      return;
    }
    const Supplier = await SupplierModel.find({
      _id: req.params.id,
      warehouse: req.user.warehouse
    });
    res.status(200).json({
      success: true,
      data: Supplier
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error
    });
  }
}

export async function createOne(
  req: UserRequest,
  res: Response
): Promise<void> {
  try {
    if (!req.user.warehouse) {
      res.status(400).json({
        success: false,
        message: 'Curently logged in user has no warehouse'
      });
      return;
    }

    const payload: Supplier & Omit<Supplier, 'warehouse' | 'createdAt'> =
      req.body;
    const Supplier = await SupplierModel.create({
      ...payload,
      warehouse: req.user.warehouse
    });

    res.status(201).json({
      success: true,
      message: 'Supplier created successfully',
      data: Supplier
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Bad request',
      error
    });
  }
}

export async function updateOne(
  req: UserRequest,
  res: Response
): Promise<void> {
  try {
    if (!req.user.warehouse) {
      res.status(400).json({
        success: false,
        message: 'Curently logged in user has no warehouse'
      });
      return;
    }

    const payload: Supplier & Omit<Supplier, 'warehouse'> = req.body;
    const response = await SupplierModel.findOneAndUpdate(
      { _id: req.params.id },
      payload,
      { new: true, upsert: false }
    );
    res.status(200).json({
      success: true,
      message: 'Supplier updated successfully',
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

export async function removeOne(
  req: UserRequest,
  res: Response
): Promise<void> {
  try {
    const response = await SupplierModel.deleteOne({
      _id: req.params.id,
      warehouse: req.user.warehouse
    });
    res.status(202).send(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error
    });
  }
}

export async function removeAll(
  req: UserRequest,
  res: Response
): Promise<void> {
  try {
    const response = await SupplierModel.deleteMany({
      warehouse: req.user.warehouse
    });
    res.status(202).send(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error
    });
  }
}
