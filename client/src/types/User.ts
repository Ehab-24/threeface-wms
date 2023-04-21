export type User = {
  _id?: string;
  email: string;
  warehouse?: string;
  displayName?: string;
  password?: string;
  token?: string;
  photoURL?: string;
  createdAt?: Date;
  lastLogin?: Date;
  role?: string;
  isVerified: boolean;
};
