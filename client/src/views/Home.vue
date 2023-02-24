<template>
  <body
    class="h-screen px-12 mt-12 bg-gradient-to-b from-slate-700 to-slate-900"
  >
    <project-list />
  </body>
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