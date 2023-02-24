<template>
    <div class="w-full px-4 py-2 bg-black bg-opacity-10 rounded-lg">
        <h1 class="text-lg text-gray-400">Projects</h1>
        <ul class="mt-2 text-gray-200">
            <li v-for="project in projects" :key="project.id" class="my-2 py-1 px-2 rounded-md bg-white bg-opacity-5">
                {{ project.userId }} - {{ project.title }}
            </li>
        </ul>
    </div>
</template>



<script>
import { ref } from "vue";

export default {
  name: "ProjectList",
  setup() {
    const projects = ref([]);
    const error = ref("");
    const loading = ref(false);

    const load = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=6"
      );

      try {
        loading.value = true;
        if (!response.ok) {
          throw new Error("Unable to load projects!");
        }

        const data = await response.json();
        projects.value = data;
      } catch (error) {
        error.value = error.message;
      } finally {
        loading.value = false;
      }
    };
    load();

    return {
      projects,
    };
  },
};
</script>

