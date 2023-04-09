import { Product } from "../../types/Product";
import { getDocs, collection ,addDoc} from "firebase/firestore";
import { db } from "./index";

export const createProduct = async (id:string , product:Product):Promise<void> => {
  const productsRef = collection(db, "vendors",id, "products");
  await addDoc(productsRef, product);
};

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
