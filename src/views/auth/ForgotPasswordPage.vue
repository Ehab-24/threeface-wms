<template>
  <div
    class="w-full h-2/3 px-4 flex flex-col items-center justify-center"
  >
    <form @submit.prevent="handleSendCode" class="w-full flex flex-col items-end">
      <input
        name="email"
        type="email"
        placeholder="Email"
        class="w-full md:w-[400px] h-10 mb-4 px-2 flex bg-black bg-opacity-10 text-gray-200 caret-gray-200 hover:bg-opacity-20 focus:bg-opacity-30 rounded-md outline-none"
      />
      <outlined-button btnType="submit" text="Send reset code" />
    </form>
    <span class="mt-10 underline underline-offset-2 text-orange-200">
      <router-link to="/login">Back</router-link>
    </span>
  </div>
</template>


<script>
import OutlinedButton from "../../components/OutlinedButton.vue";
import handleResetPassword from "../../composables/auth/handleForgotPassword";

export default {
  components: {
    OutlinedButton,
  },
  setup() {
    const handleSendCode = handleResetPassword;

    return { handleSendCode };
  },
};
</script>