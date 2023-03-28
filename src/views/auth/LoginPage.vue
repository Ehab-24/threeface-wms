<template>
  <div class="w-full h-2/3 flex flex-col justify-center">
    <div class="w-full flex flex-col items-center">
      <heading-1>Log in</heading-1>
      <form
        @submit.prevent="handleSubmit"
        class="w-full md:w-[400px] mt-8 flex flex-col items-end"
      >
        <text-field
          name-text="email"
          type-text="email"
          placeholder-text="Email"
        />
        <text-field
          name-text="password"
          type-text="password"
          placeholder-text="Password"
        />
        <outlined-button type="submit">Login</outlined-button>
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
import TextField from "../../components/TextField.vue";
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
    TextField,
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