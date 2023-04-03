import { updateUser } from "../../repository/authentication";

const updateUserProfile = async (e) => {
  // This function receives the `event object` as an argument

  const { name, imageURL } = e.target.elements;

  if (!name.value) {
    throw new Error("Missing required fields. 😠");
  }

  try {
    await updateUser({
      name: name.value,
      imageURL: imageURL.value,
    });
  } catch (error) {
    // ! dev only
    console.error(error.message);
  }
};

export default updateUserProfile;
