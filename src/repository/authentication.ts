import {
  Auth,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import app from "./db";

const auth: Auth = getAuth(app);

const getUserState = async (): Promise<User> => {
  // Returns a promise that resolves to the user object
  // or null if no user is signed in.
  const user = await new Promise((resolve, reject) =>
    onAuthStateChanged(auth, resolve, reject)
  );
  return user as User;
};

const updateUser = async (profile: User): Promise<void> => {
  try {
    const auth: Auth = getAuth();

    await updateProfile(auth.currentUser!, {
      displayName: profile.name,
      photoURL: profile.imageUrl,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { getUserState, updateUser };
