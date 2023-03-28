<template>
  <div class="w-full flex justify-between">
    <div>
        <h1 class="text-3xl text-gray-200">Account</h1>
        <p class="text-sm text-gray-400 italic">{{ user?.email ?? "-------" }}</p>
    </div>
    <outlined-button :onClick="handleSignOut">Sign out</outlined-button>
  </div>
</template>


<script>

import OutlinedButton from "../components/OutlinedButton.vue";
import handleLogOut from "../composables/auth/handleLogOut";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref } from "vue";

export default {
  components: { OutlinedButton },
    setup() {

        const router = useRouter();
        const auth = getAuth();

        const user = ref(null);

        const handleSignOut = () => handleLogOut(router);

        onAuthStateChanged(auth, (u) => {
            if (u) {
                user.value = u;
            } else {
                user.value = null;
            }
        });

        return { handleSignOut, user };
    },
};
</script>
