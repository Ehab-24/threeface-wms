import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { createUser } from "../../firebase/firestore";

const handleSignup = async (e, router) => {
  const auth = getAuth();

  const { email, password, confirmPassword } = e.target.elements;

  try {

    if (!email.value || !password.value || !confirmPassword.value) {
      throw new Error("Please enter all fields. 😠");
    }

    if (password.value !== confirmPassword.value) {
      throw new Error("Passwords do not match. 🧬");
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    const user = {
      _id: userCredential.user.uid,
      name: "Jeff",
    };
    console.log("🚀 ~ file: handleSignup.js:27 ~ handleSignup ~ user:", user)
    
    await createUser(user);

    router.push("/");
  } catch (error) {
    const errorCode = error.code;

    switch (errorCode) {
      case "auth/email-already-in-use":
        alert("Email already in use. Please try again.");
        break;
      case "auth/invalid-email":
        alert("Please enter a valid email.");
        break;
      case "auth/weak-password":
        alert("Please enter a stronger password.");
        break;
      case "auth/operation-not-allowed":
        alert("You are banned from this site.");
        break;
      default:
        alert(error.message);
    }
  }
};

export default handleSignup;
