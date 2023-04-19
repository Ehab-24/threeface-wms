import { Timestamp } from "firebase/firestore"

export type Customer = {
  
    name: string,
    totalSpent: number,
    numPurchases: number,
    lastPurchase: Timestamp
}