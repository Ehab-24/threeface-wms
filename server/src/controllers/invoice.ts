import { Response } from 'express';
import { UserRequest } from '../interfaces';
import { InvoiceModel } from '../models';
import { Invoice, PageInfo } from '../types';
import { extendPipeline, getPageInfo } from '../shared/utils';
import mongoose from 'mongoose';

// **************************************************************
// * CRUD for invoices of the currently logged in user
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

    const pipeline = [{ $match: { warehouse: new mongoose.Types.ObjectId(req.user.warehouse)} }];
    const { limit, page }: { limit: number; page: number } = extendPipeline(
      pipeline,
      req
    );
    const invoices = await InvoiceModel.aggregate(pipeline);
    const pageInfo: PageInfo = getPageInfo(invoices, page, limit);

    res.status(200).json({
      success: true,
      data: invoices,
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
    const invoice = await InvoiceModel.find({
      _id: req.params.id,
      warehouse: req.user.warehouse
    });
    res.status(200).json({
      success: true,
      data: invoice
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

    const payload: Invoice & Omit<Invoice, 'warehouse' | 'createdAt'> =
      req.body;
    const invoice = await InvoiceModel.create({
      ...payload,
      warehouse: req.user.warehouse
    });

    res.status(201).json({
      success: true,
      message: 'Invoice created successfully',
      data: invoice
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

    const payload = req.body;
    const response = await InvoiceModel.findOneAndUpdate(
      { _id: req.params.id },
      payload,
      { new: true, upsert: false }
    );
    res.status(200).json({
      success: true,
      message: 'Invoice updated successfully',
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
    const response = await InvoiceModel.deleteOne({
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
    const response = await InvoiceModel.deleteMany({
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
