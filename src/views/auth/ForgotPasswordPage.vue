<template>
  <div class="w-full h-2/3 flex flex-col items-center justify-center">
    <heading-1>Forgot Password</heading-1>
    <form
      @submit.prevent="handleSendCode"
      class="w-full md:w-[400px] mt-8 mb-16 flex flex-col items-end"
    >

      <text-field
        name-text="email"
        type-text="email"
        placeholder-text="Email"
      />

      <outlined-button btnType="submit">Send reset link</outlined-button>
    </form>

    <router-span linkTo="/login">Back</router-span>
  </div>
</template>


<script>
import TextField from "../../components/TextField.vue";
import Heading1 from "../../components/Heading1.vue";
import RouterSpan from "../../components/RouterSpan.vue";
import OutlinedButton from "../../components/OutlinedButton.vue";
import handleResetPassword from "../../composables/auth/handleForgotPassword";

export default {
  components: {
    OutlinedButton,
    Heading1,
    RouterSpan,
    TextField,
  },
  setup() {
    const handleSendCode = handleResetPassword;

    return { handleSendCode };
  },
};
</script>