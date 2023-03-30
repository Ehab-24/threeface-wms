
import { getAuth } from "firebase/auth";

const handleSignout = async (router) => {
    const auth = getAuth();
    await auth.signOut();

    router.push("/login");
}

export default handleSignout;