import { initializeApp } from "firebase/app";

// * import { getAnalytics } from "firebase/analytics";

// TODO: To enable hosting, run: npm install -g firebase-tools

const config = {
  apiKey: "AIzaSyDz9lnW6TZQ1dDEuX0AQdTuqbnsfmv7_3A",
  authDomain: "project-manager-7d1a7.firebaseapp.com",
  projectId: "project-manager-7d1a7",
  storageBucket: "project-manager-7d1a7.appspot.com",
  messagingSenderId: "4848634512",
  appId: "1:4848634512:web:27396d2eb6b407820f2615",
  measurementId: "G-56EHF7YS5Z"
};

const app = initializeApp(config);

// * const analytics = getAnalytics(app);


export default app;