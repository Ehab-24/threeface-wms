<template>
  <div class="w-full h-2/3 flex flex-col items-center justify-center">
    
    <heading-1>Sign up</heading-1>
    <form
      @submit.prevent="handleSubmit"
      class="w-full md:w-[400px] mt-8 flex flex-col items-end"
    >
      <input
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
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        class="w-full h-10 mb-4 px-2 bg-black bg-opacity-10 text-gray-200 caret-gray-200 hover:bg-opacity-20 focus:bg-opacity-30 rounded-md outline-none"
      />
      <outlined-button type="submit" text="Register" />
    </form>
    <div class="w-full md:w-[400px] mt-16 flex justify-center">
      <span class="text-gray-200"> Already have an account? &nbsp; </span>
      
      <router-span linkTo="/login">Log in</router-span>
    </div>
  </div>
</template>
  
  
<script>
import RouterSpan from "../../components/RouterSpan.vue";
import Heading1 from "../../components/Heading1.vue";
import OutlinedButton from "../../components/OutlinedButton.vue";
import handleSignup from "../../composables/auth/handleSignup";
import { useRouter } from "vue-router";

export default {
  components: {
    OutlinedButton,
    Heading1,
    RouterSpan,
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