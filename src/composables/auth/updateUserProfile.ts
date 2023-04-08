import { updateUser } from "../../repository/authentication";

const updateUserProfile = async (e: any) => {
  // This function receives the `event object` as an argument

  const { name, photoURL } = e.target.elements;

  if (!name.value) {
    throw new Error("Missing required fields. 😠");
  }

  try {
    await updateUser({
      name: name.value as string,
      photoURL: photoURL.value as string,
    });
  } catch (error: any) {
    // ! dev only
    console.error(error.message);
  }
};

export default updateUserProfile;
