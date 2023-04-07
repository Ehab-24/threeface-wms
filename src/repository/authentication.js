import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

import app from "./db";

const auth = getAuth(app);

const getUserState = async () => {
  // Returns a promise that resolves to the user object
  // or null if no user is signed in.
  const user = await new Promise((resolve, reject) =>
    onAuthStateChanged(auth, resolve, reject)
  );
  return user;
};


const updateUser = async (profile) => {
  try {
      const auth = getAuth();

      await updateProfile(auth.currentUser, {
          displayName: profile.name,
          photoURL: profile.imageURL,
      });
  }
  catch (error) {
      throw new Error(error.message);
  }
};

export { getUserState, updateUser };
