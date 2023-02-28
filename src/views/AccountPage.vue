<template>
  <div class="w-full flex justify-between">
    <h1 class="text-3xl text-gray-200">Account</h1>
    <outlined-button text="Sign Out" :onClick="handleSignOut" />
  </div>
</template>


<script>

import OutlinedButton from "../components/OutlinedButton.vue";
import handleLogOut from "../composables/auth/handleLogOut";
import { useRouter } from "vue-router";

export default {
  components: { OutlinedButton },
    setup() {

        const router = useRouter();

        const handleSignOut = () => handleLogOut(router);

        return { handleSignOut };
    },
};
</script>
