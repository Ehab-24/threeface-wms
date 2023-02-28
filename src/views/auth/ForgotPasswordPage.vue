<template>
  <div
    class="w-full h-2/3 flex flex-col items-center justify-center"
  >
    <heading-1>Forgot Password</heading-1>
    <form @submit.prevent="handleSendCode" class="w-full md:w-[400px] mt-8 mb-16 flex flex-col items-end">
      <input
        name="email"
        type="email"
        placeholder="Email"
        class="w-full md:w-[400px] h-10 mb-4 px-2 flex bg-black bg-opacity-10 text-gray-200 text-gray-200 caret-gray-200 hover:bg-opacity-20 focus:bg-opacity-30 rounded-md outline-none"
      />
      <outlined-button btnType="submit" text="Send reset link" />
    </form>
    <router-span linkTo="/login">Back</router-span>
  </div>
</template>


<script>
import Heading1 from "../../components/Heading1.vue";
import RouterSpan from "../../components/RouterSpan.vue";
import OutlinedButton from "../../components/OutlinedButton.vue";
import handleResetPassword from "../../composables/auth/handleForgotPassword";

export default {
  components: {
    OutlinedButton,
    Heading1,
    RouterSpan,
  },
  setup() {
    const handleSendCode = handleResetPassword;

    return { handleSendCode };
  },
};
</script>