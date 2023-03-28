<template>
  <div class="w-full px-4 py-2">
    <div v-if="error">
      <error :message="error" />
    </div>

    <ul v-else-if="projects" class="mt-2 text-gray-200">
      <!-- <li
        @click="pushProjectRoute(project.id)"
        v-for="project in projects"
        :key="project.id"
        class="my-2 py-1 px-2 rounded-md bg-white bg-opacity-5 hover:bg-opacity-10 transition-all cursor-pointer"
      >
        {{ project.id }} - {{ project.title }}
      </li> -->

      <ProjectTile
        @click="pushProjectRoute(project.id)"
        v-for="project in projects"
        :key="project.id"
      />
    </ul>

    <spinner v-else />
  </div>
</template>



<script>
import ProjectTile from "./ProjectTile.vue";
import Error from "./Error.vue";
import Spinner from "./Spinner.vue";
import getProjects from "../composables/project/getProjects.js";

export default {
  name: "ProjectList",
  components: {
    Error,
    Spinner,
    ProjectTile,
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

