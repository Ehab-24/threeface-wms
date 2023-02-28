import app from "./index";
import { getFirestore, setDoc } from "firebase/firestore";

const db = getFirestore(app);

const createUser = async (user) => {
  await setDoc(doc(db, "user", user._id), user);
};

const getUser = (id) => db.collection("user").doc(id).get();

export { createUser, getUser };
