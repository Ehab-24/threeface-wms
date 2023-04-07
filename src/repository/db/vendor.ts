import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./index.js";

const createVendor = async (id: string): Promise<void> => {
  try {
    await setDoc(doc(db, "vendors", id), {});
  } catch (error: any) {
    // ! dev only
    console.error("Error creating vendor: ", error);

    throw new Error(error.message);
  }
};

const getVendor = async (id: any): Promise<Vendor> => {
  const docSnap = await getDoc(doc(db, "vendors", id));

  const data = docSnap.data();
  try {
    if (data) {
      return data as Vendor;
    } else {
      throw new Error("No such document!");
    }
  } catch (error: any) {
    // ! dev only
    console.error("Error getting vendor: ", error);

    throw new Error(error.message);
  }
};

export { createVendor, getVendor };
