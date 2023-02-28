<template>
  <div
    class="w-full h-2/3 flex flex-col justify-center"
  >
    <div class="w-full flex flex-col items-center">
      <h1 class="text-lg text-gray-400 font-extrabold tracking-wide">Login</h1>
      <form
        @submit.prevent="handleSubmit"
        class="w-full md:w-[400px] mt-8 px-4 flex flex-col items-end"
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
        <!-- <button
          type="submit"
          class="w-min h-10 px-6 rounded-md hover:rounded-xl bg-black text-gray-400 font-bold tracking-wide transition-all cursor-pointer"
        >
          Login
        </button> -->
        <outlined-button type="submit" text="Login"/>
      </form>
      <div class="w-full md:w-[400px] mt-16 px-4 flex justify-center">
        <span class="text-gray-200"> Do not have an account? &nbsp; </span>
        <button
          type="button"
          @click="pushSignupPage"
          class="underline text-orange-200 tracking-wide"
        >
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import OutlinedButton from "../components/OutlinedButton.vue";
import handleLogin from "../composables/auth/handleLogin";
import { useRouter } from "vue-router";

export default {
  components: {
    OutlinedButton,
  },
  setup() {
    const router = useRouter();
    const handleSubmit = (e) => handleLogin(e, router);

    const pushSignupPage = () => {
      router.push("/signup");
    };

    return { handleSubmit, pushSignupPage };
  },
};
</script>