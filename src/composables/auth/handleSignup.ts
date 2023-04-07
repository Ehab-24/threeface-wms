import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { Router } from "vue-router";
import { createVendor } from "../../repository/db/vendor";

const handleSignup = async (e: any, router: Router) => {
// This function receives the `event object` and the `vue-router` as arguments
  const auth = getAuth();
  const { email, password, confirmPassword } = e.target.elements;

  try {

    if (!email.value || !password.value || !confirmPassword.value) {
      throw new Error("Missing required fields. 😠");
    }
    if (password.value !== confirmPassword.value) {
      throw new Error("Passwords do not match. ❌");
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    // * Create vendor in db
    await createVendor(userCredential.user.uid);

    // * Navigate to home page
    router.push("/");
  } catch (error: any) {
    const errorCode = error.code;

    switch (errorCode) {
      case "auth/email-already-in-use":
        alert("Email already in use. You may want to log in. 🔁");
        break;
      case "auth/invalid-email":
        alert("Please enter a valid email. ❌");
        break;
      case "auth/weak-password":
        alert("Please enter a stronger password. 💪");
        break;
      case "auth/operation-not-allowed":
        alert("You are banned from this site. 🚫");
        break;
      default:
        alert(error.message);
    }
  }
};

export default handleSignup;
