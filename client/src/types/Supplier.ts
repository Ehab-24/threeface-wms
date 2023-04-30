export type Customer = {
    _id?: string;
    name: string;
    lastSupplied: Date;
    createdAt: Date;
    totalSupplies: number;
    totalSold: number;
    warehouse: string;
  };