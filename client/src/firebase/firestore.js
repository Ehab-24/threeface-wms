import app from "./index";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(app);

const createUser = async (user) => {
  try {
    await setDoc(doc(db, "users", user._id), user);
    console.log("User created successfully.");
  } catch (error) {
    console.error("Error creating user: ", error);
    throw new Error(error.message);
  }
};

const getUser = (id) => db.collection("user").doc(id).get();

export { createUser, getUser };

export default db;
