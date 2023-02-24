<template>
  <div class="text-3xl text-gray-200">Home</div>
</template>


<script>
import { defineComponent } from "vue";
import ProjectList from "../components/ProjectList.vue";

export default defineComponent({
  name: "home",
  components: {
    ProjectList,
  },
});
</script>