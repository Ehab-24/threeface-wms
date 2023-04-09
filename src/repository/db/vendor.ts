import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./index.js";

const createVendor = async (id: string ): Promise<void> => {
  try {
    await setDoc(doc(db, "vendors", id ), {});
  } catch (error: any) {
    // ! dev only
    console.error("Error creating vendor: ", error);

    throw new Error(error.message);
  }
};


export { createVendor };
