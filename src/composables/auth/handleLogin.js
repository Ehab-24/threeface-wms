import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const handleLogin = async (e, router) => {
  const auth = getAuth();

  const { email, password } = e.target.elements;

  try {

    if(!email.value || !password.value) {
      throw new Error("Please enter both email and password.");
    }

    const userCredentials = await signInWithEmailAndPassword(auth, email.value, password.value);

    router.push("/");
  } catch (error) {
    const errorCode = error.code;

    switch (errorCode) {
      case "auth/invalid-email":
        alert("Please enter a valid email 🙃.");
        break;
      case "auth/user-disabled":
        alert("You are banned from this site 😆.");
        break;
      case "auth/user-not-found":
        alert("User not found. You may want to sign up 👾.");
        break;
      case "auth/wrong-password":
        alert("Incorrect password. Please try again 👽.");
        break;
      default:
        alert(error.message);
    }
  }
};

export default handleLogin;
