<template>
  <div class="w-full h-2/3 flex flex-col items-center justify-center">
    <h1 class="text-lg text-gray-400 font-extrabold tracking-wide">Sign Up</h1>
    <form
      @submit.prevent="handleSubmit"
      class="w-full md:w-2/3 xl:w-2/5 mt-8 pl-4 flex flex-col items-end"
    >
      <input
        name="email"
        type="email"
        placeholder="Email"
        class="w-full h-10 mb-4 px-2 bg-black bg-opacity-10 caret-gray-200 hover:bg-opacity-20 focus:bg-opacity-30 rounded-md outline-none"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        class="w-full h-10 mb-4 px-2 bg-black bg-opacity-10 caret-gray-200 hover:bg-opacity-20 focus:bg-opacity-30 rounded-md outline-none"
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        class="w-full h-10 mb-4 px-2 bg-black bg-opacity-10 caret-gray-200 hover:bg-opacity-20 focus:bg-opacity-30 rounded-md outline-none"
      />
      <outlined-button type="submit" text="Register"/>
    </form>
    <div class="w-full md:w-2/3 xl:w-2/5 mt-16 pl-4 flex justify-center">
      <span class="text-gray-200"> Already have an account? &nbsp; </span>
      <button
        type="button"
        @click="pushLoginPage"
        class="underline text-orange-200 tracking-wide"
      >
        Log in
      </button>
    </div>
  </div>
</template>
  
  
<script>
import OutlinedButton from "../components/OutlinedButton.vue";
import handleSignup from "../composables/auth/handleSignup";
import { useRouter } from "vue-router";

export default {
  components: {
    OutlinedButton,
  },
  setup() {
    const router = useRouter();

    const handleSubmit = (e) => handleSignup(e, router);

    const pushLoginPage = () => {
      router.push("/login");
    };

    return { handleSubmit, pushLoginPage };
  },
};
</script>