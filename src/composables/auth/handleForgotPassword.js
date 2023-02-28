import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const handleResetPassword = async (e) => {
  try {

    const {email} = e.target.elements;

    if(!email.value) {
        throw new Error("Please enter your email.");
    }

    const auth = getAuth();

    await sendPasswordResetEmail(auth, email.value);
    
    alert("Password reset email sent! 👍");
  } catch (error) {
    
    const errorCode = error.code;
    
    switch (errorCode) {
      case "auth/invalid-email":
        alert("Please enter a valid email 🙃.");
        break;
      case "auth/user-not-found":
        alert("User not found. You may want to sign up 👉.");
        break;
      default:
        alert(error.message);
    }
  }
};

export default handleResetPassword;
