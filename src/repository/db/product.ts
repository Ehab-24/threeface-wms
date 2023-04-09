import { Product } from "../../types/Product";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./index";

export const getProducts = async (id: any): Promise<Product[]> => {
  let Products: Product[] = [];
  const querySnapshot = await getDocs(
    collection(db, "vendors", id, "products")
  );
  querySnapshot.forEach((doc) => {
    Products.push(doc.data() as Product);
  });

  return Products;
};
