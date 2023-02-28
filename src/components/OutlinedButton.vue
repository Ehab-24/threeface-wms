<template>
  <button
    type="{{btnType}}"
    @click="onClick"
    class="h-10 py-2 px-4 bg-transparent text-white font-semibold hover:text-orange-200 focus:text-orange-200 border border-blue focus:border-transparent hover:border-transparent hover:bg-slate-900 focus:bg-slate-900 rounded transition-all"
  >
    {{ text }}
  </button>
</template>



<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    btnType: {
      type: String,
      default: "button",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  setup() {
    return {};
  },
};
</script>
