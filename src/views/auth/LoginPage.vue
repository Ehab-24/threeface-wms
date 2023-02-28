<template>
  <div class="w-full h-2/3 flex flex-col justify-center">
    <div class="w-full flex flex-col items-center">
      <heading-1>Log in</heading-1>
      <form
        @submit.prevent="handleSubmit"
        class="w-full md:w-[400px] mt-8 flex flex-col items-end"
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          class="w-full h-10 mb-4 px-2 bg-black bg-opacity-10 text-gray-200 caret-gray-200 hover:bg-opacity-20 focus:bg-opacity-30 rounded-md outline-none"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          class="w-full h-10 mb-4 px-2 bg-black bg-opacity-10 text-gray-200 caret-gray-200 hover:bg-opacity-20 focus:bg-opacity-30 rounded-md outline-none"
        />
        <outlined-button type="submit" text="Login" />
      </form>

      <div class="w-full md:w-[400px] mt-16 mb-4 flex justify-center">
        <span class="text-gray-200"> Do not have an account? &nbsp; </span>

        <router-span linkTo="/signup">Sign up</router-span>
      </div>

      <router-span linkTo="/forgot-password">Forgot Password?</router-span>
    </div>
  </div>
</template>


<script>
import RouterSpan from "../../components/RouterSpan.vue";
import OutlinedButton from "../../components/OutlinedButton.vue";
import handleLogin from "../../composables/auth/handleLogin";
import Heading1 from "../../components/Heading1.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    OutlinedButton,
    RouterSpan,
    Heading1,
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