import { Timestamp } from "firebase/firestore";

export type Product = {
    name: string,
    price: number,
    quantity: number,
    createdAt: Timestamp,
}