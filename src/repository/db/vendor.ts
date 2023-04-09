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

<<<<<<< HEAD
const getVendor = async (id: string ): Promise<Vendor> => {
  const docSnap = await getDoc(doc(db, "vendors", id));
=======
>>>>>>> 5475e93d1c5bf5f6eda5c1f6421e54579e52b89f

export { createVendor };
