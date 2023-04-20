import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// * import { getAnalytics } from "firebase/analytics";

// TODO: To enable hosting, run: npm install -g firebase-tools

const config = {
  apiKey: "AIzaSyBIPn6kSxws4y9cz9slIJl3xPy7hqm7rw4",
  authDomain: "warehouse-management-sys-a2242.firebaseapp.com",
  projectId: "warehouse-management-sys-a2242",
  storageBucket: "warehouse-management-sys-a2242.appspot.com",
  messagingSenderId: "695055308438",
  appId: "1:695055308438:web:bf6ed92f0c3adeebb254b7",
  measurementId: "G-9TGKVHS7CH"
};

const app = initializeApp(config);

// * const analytics = getAnalytics(app);


const db = getFirestore(app);

export { db };
export default app;