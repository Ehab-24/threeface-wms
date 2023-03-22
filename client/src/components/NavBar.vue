<template>
  <nav
    v-if="isAuthenticated"
    class="h-16 mb-8 md:mb-12 flex items-center justify-between bg-transparent text-orange-200 font-bold"
  >
    <!-- LOGO -->
    <!-- <p class="font-extrabold text-xl text-orange-200 cursor-pointer">Proj</p> -->

    <!-- Routes -->
    <div class="flex gap-12 items-center">
      <router-link to="/" class="hover:text-white cursor-pointer transition-all"
        >Home</router-link
      >
      <router-link
        to="/projects"
        class="hover:text-white cursor-pointer transition-all"
        >Projects</router-link
      >
      <router-link
        to="/dashboard"
        class="hover:text-white cursor-pointer transition-all"
        >Dashboard</router-link
      >
    </div>

    <!-- Auth -->
    <div v-if="!isAuthenticated" class="flex gap-4 items-center">
      <router-link
        to="/login"
        class="hover:text-white cursor-pointer transition-all"
        >Login</router-link
      >
      <router-link
        to="/signup"
        class="hover:text-white cursor-pointer transition-all"
        >Signup</router-link
      >
    </div>

    <!-- Account Icon -->
    <router-link
      to="/account"
      class="w-10 h-10 rounded-full bg-white cursor-pointer"
    ></router-link>
  </nav>
</template>


<script>
// import { getUserState } from "../firebase/authentication";
import { getAuth } from "firebase/auth";
import { onMounted, ref } from "vue";
import { onAuthStateChanged } from 'firebase/auth';

export default {
  setup() {
    const auth = getAuth();
    const isAuthenticated = ref(false);

    // onMounted(async () => (isAuthenticated.value = await getUserState()));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        isAuthenticated.value = true;
      } else {
        isAuthenticated.value = false;
      }
    });

    return { isAuthenticated };
  },
};
</script>