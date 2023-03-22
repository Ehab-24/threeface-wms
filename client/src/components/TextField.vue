<template>
  <input
    :name="nameText"
    :type="typeText"
    :max-length="maxLength"
    :placeholder="placeholderText"
    class="w-full h-10 md:w-[400px] mb-4 px-2 flex bg-black bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-30 text-gray-200 caret-gray-200 rounded-md outline-none"
  />
</template>

<script>
export default {
  props: {
    nameText: {
      type: String,
      required: true,
    },
    typeText: {
      type: String,
      default: "text",
    },
    placeholderText: {
      type: String,
      required: true,
    },
    maxLength: {
      type: Number,
      default: 255,
    },
  },
  setup() {},
};
</script>


<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #181a29 inset !important;
}
input:-webkit-autofill {
  -webkit-text-fill-color: white !important;
}
</style>