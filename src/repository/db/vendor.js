import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./index.js";

const createVendor = async (id) => {
  try {
    await setDoc(doc(db, "vendors", id), {});
  } catch (error) {
    // ! dev only
    console.error("Error creating vendor: ", error);

    throw new Error(error.message);
  }
};

const getVendor = async (id) => {
  const docSnap = await getDoc(doc(db, "vendors", id));
  const data = docSnap.data();

  if (data) {
    return data;
  } else {
    throw new Error("No such document!");
  }
};

export { createVendor, getVendor };
