
import { getAuth } from "firebase/auth";
import { Router } from "vue-router";

const handleSignout = async (router: Router) => {
    const auth = getAuth();
    await auth.signOut();

    router.push("/login");
}

export default handleSignout;