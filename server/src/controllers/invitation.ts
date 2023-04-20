import { Invitation } from '../types';
import * as emailService from '../services/email';
import { UserModel, InvitationModel } from '../models';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { UserRequest } from '../interfaces';
import { Response } from 'express';
import { extendPipeline } from '../global/utils';
import mongoose from 'mongoose';

async function validate(invitation: Invitation): Promise<boolean> {
  const previousInvites = await InvitationModel.aggregate([
    {
      $match: {
        to: invitation.to,
        warehouse: new mongoose.Types.ObjectId(invitation.warehouse),
        $or: [
          {
            $and: [
              { expiry: { $gt: new Date() } },
              {
                $or: [
                  { status: { $nin: ['rejected', 'read'] } },
                  { status: { $eq: 'pending' } }
                ]
              }
            ]
          },
          { status: { $eq: 'accepted' } }
        ]
      }
    }
  ]);
  console.log(previousInvites);
  if (previousInvites.length > 0) {
    return false;
  }
  return true;
}

export async function send(req: UserRequest, res: Response): Promise<void> {
  try {
    const payload = req.body as Invitation &
      Omit<Invitation, 'warehouse' | 'createdAt' | 'expiry'>;
    if (!req.user.warehouse) {
      res.status(403).json({
        success: false,
        message: 'Curently logged in user has no warehouse'
      });
      return;
    }
    payload.warehouse = req.user.warehouse;
    if (!(await validate(payload))) {
      res.status(409).json({
        success: false,
        message: 'User already invited'
      });
      return;
    }

    const info: SMTPTransport.SentMessageInfo = await emailService.sendGmail(
      payload.to,
      req.user.email,
      payload.subject,
      payload.html
    );

    payload.warehouse = req.user.warehouse;
    const invitationDoc = await InvitationModel.create({
      ...payload,
      from: {
        _id: req.user._id,
        name: req.user.displayName ?? req.user.email.split('@')[0],
        email: req.user.email
      }
    });
    const userDoc = await UserModel.findOne({ email: payload.to });

    res.status(201).json({
      _id: invitationDoc._id.toString(),
      success: true,
      expiry: invitationDoc.expiry,
      userAlreadyExists: !!userDoc,
      mailInfo: info
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Bad request',
      error
    });
  }
}

// Only the user who received the invite can update its status
export async function update(req: UserRequest, res: Response): Promise<void> {
  try {
    if (!req.params.status) {
      res.status(400).json({
        success: false,
        message: 'Bad request'
      });
      return;
    }

    const invitation = await InvitationModel.findOne({
      _id: req.params.id,
      'to._id': req.user._id
    });
    if (!invitation) {
      res.status(403).json({
        success: false,
        message: 'Unauthorized'
      });
      return;
    }

    invitation.status = req.params.status;
    await invitation.save();
    res.status(200).json({
      success: true,
      message: 'Invitation accepted',
      data: invitation
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error
    });
  }
}

// Only the user who sent the invite can delete it
export async function remove(req: UserRequest, res: Response): Promise<void> {
  try {
    if (!req.params.id) {
      res.status(400).json({
        success: false,
        message: 'Bad request'
      });
      return;
    }

    const response = await InvitationModel.deleteOne({
      _id: req.params.id,
      'from.email': req.user.email
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

export async function readSentInvites(
  req: UserRequest,
  res: Response
): Promise<void> {
  try {
    const pipeline = [{ $match: { 'from.email': req.user.email } }];
    extendPipeline(pipeline, req);
    const response = await InvitationModel.aggregate(pipeline);

    res.status(200).json({
      success: true,
      message: 'Invitations read successfully',
      data: response
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error
    });
  }
}

export async function readReceivedInvites(
  req: UserRequest,
  res: Response
): Promise<void> {
  try {
    const pipeline = [{ $match: { to: req.user.email } }];
    extendPipeline(pipeline, req);
    const response = await InvitationModel.aggregate(pipeline);

    res.status(200).json({
      success: true,
      message: 'Invitations read successfully',
      data: response
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error
    });
  }
}
