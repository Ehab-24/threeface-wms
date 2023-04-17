import { Timestamp } from "firebase/firestore";

export type Invoice = {
    _id?: string,
    customer: string,
    totalAmount: number,
    createdAt: Timestamp,
    numProducts: number,
};