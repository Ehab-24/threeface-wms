export type User = {
  _id?: string;
  email: string;
  warehouse?: string;
  displayName?: string;
  password?: string;
  token?: string;
  createdAt?: Date;
  lastLogin?: Date;
  role?: string;
};
