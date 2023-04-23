export type Invitation = {
  _id?: string;
  to: string;
  from: {
    name: string;
    email: string;
  };
  subject: string;
  html: string;
  warehouse: string,
  role: string;
  status: 'read' | 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
  expiry: Date
};