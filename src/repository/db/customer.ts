
import { Customer } from "../../types/Customer";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./index";

export const getCustomers = async (id: any): Promise<Customer[]> => {
  let Customers: Customer[] = [];
  const querySnapshot = await getDocs(
    collection(db, "vendors", id, "customers")
  );
  querySnapshot.forEach((doc) => {
    Customers.push(doc.data() as Customer);
  });

  return Customers;
};