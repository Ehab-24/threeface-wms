
import { getAuth } from "firebase/auth";

const handleLogOut = async (router) => {
    const auth = getAuth();
    await auth.signOut();

    router.push("/login");
}

export default handleLogOut;