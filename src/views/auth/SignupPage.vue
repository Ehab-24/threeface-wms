<template>
  <div class="w-full h-2/3 flex flex-col items-center justify-center">
    <heading-1>Sign up</heading-1>
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
      <text-field
        name-text="confirmPassword"
        type-text="password"
        placeholder-text="Confirm Password"
      />

      <outlined-button type="submit">Register</outlined-button>
    </form>

    <div class="w-full md:w-[400px] mt-16 flex justify-center">
      <span class="text-gray-200"> Already have an account? &nbsp; </span>

      <router-span linkTo="/login">Log in</router-span>
    </div>
  </div>
</template>
  
  
<script>
import RouterSpan from "../../components/RouterSpan.vue";
import TextField from "../../components/TextField.vue";
import Heading1 from "../../components/Heading1.vue";
import OutlinedButton from "../../components/OutlinedButton.vue";
import handleSignup from "../../composables/auth/handleSignup";
import { useRouter } from "vue-router";

export default {
  components: {
    OutlinedButton,
    Heading1,
    RouterSpan,
    TextField,
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