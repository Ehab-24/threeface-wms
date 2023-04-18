import { Response } from 'express';
import { UserRequest } from '../interfaces';
import { ProductModel } from '../models';
import { Product } from '../types';

// **************************************************************
// * CRUD for products of the currently logged in user
// ! Requests do not require 'warehouse' field
// **************************************************************

export async function readAll(req: UserRequest, res: Response): Promise<void> {
  try {
    if (!req.user.warehouse) {
      res.status(400).json({
        success: false,
        message: 'Bad request: Curently logged in user has no warehouse'
      });
      return;
    }
    const products = await ProductModel.find({ warehouse: req.user.warehouse });
    res.status(200).json({
      success: true,
      data: products
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
        message: 'Bad request: Curently logged in user has no warehouse'
      });
      return;
    }
    const product = await ProductModel.find({
      _id: req.params.id,
      warehouse: req.user.warehouse
    });
    res.status(200).json({
      success: true,
      data: product
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
        message: 'Bad request: Curently logged in user has no warehouse'
      });
      return;
    }

    const payload: Product & Omit<Product, 'warehouse'> = req.body;
    const product = await ProductModel.create({
      ...payload,
      warehouse: req.user.warehouse
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product
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
        message: 'Bad request: Curently logged in user has no warehouse'
      });
      return;
    }

    const payload: Product & Omit<Product, 'warehouse'> = req.body;
    const response = await ProductModel.findOneAndUpdate(
      { _id: req.params.id },
      payload,
      { new: true, upsert: false }
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
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
    const response = await ProductModel.deleteOne({
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
    const response = await ProductModel.deleteMany({
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
