import { Request } from 'express';
import { User } from '../types';

export interface UserRequest extends Request {
  user?: User
}
