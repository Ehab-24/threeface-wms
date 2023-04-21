export type Invoice = {
  _id?: string;
  warehouse: string;
  customer: string;
  numProducts: number;
  createdAt: Date;
  products: {
    name: string;
    price: number;
    quantity: number;
  }[];
};
