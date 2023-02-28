<template>
  <div class="w-full px-4 py-2">
    
    <div v-if="error">
      <error :message="error" />
    </div>
    
    <ul v-else-if="projects.length" class="mt-2 text-gray-200">
      <li
        v-for="project in projects"
        :key="project.id"
        class="my-2 py-1 px-2 rounded-md bg-white bg-opacity-5 hover:bg-opacity-10 transition-all"
      >
        <button @click="pushProjectRoute(project.id)" class="w-full text-left">
          {{ project.id }} - {{ project.title }}
        </button>

      </li>
    </ul>

    <spinner v-else/>
  </div>
</template>



<script>

import Error from "./Error.vue";
import Spinner from "./Spinner.vue";
import getProjects from "../composables/project/getProjects.js";


export default {
  name: "ProjectList",
  components: {
    Error,
    Spinner,
  },
  setup() {
    const { projects, error } = getProjects();

    return {
      projects,
      error,
    };
  },
  methods: {
    pushProjectRoute(id) {
      this.$router.push({ name: "project", params: { id } });
    },
  },
};
</script>

