<template>
  <div>
    <div v-if="project" class="text-bold text-gray-200">
      <div class="text-lg text-gray-400 font-extrabold tracking-wide">
        Project {{ project.id }}
      </div>
      <section class="px-4">
        <div class="mt-4 flex items-center gap-2 text-gray-200">
        <span class="text-orange-200 font-bold tracking-wide text-md"
          >Title:</span
        >
        {{ project.title }}
      </div>
      <div class="mt-2 flex-col text-gray-200">
        <span class="text-orange-200 font-bold tracking-wide text-md"
          >Description:</span
        >
        {{ project.body }}
      </div>
      </section>
      <!-- <div class="text-2xl text-gray-200">Project Owner: {{ user.name }}</div> -->
    </div>

    <div v-else-if="error">
      <error :message="error" />
    </div>

    <spinner v-else />
  </div>
</template>



<script>
import Error from "../components/Error.vue";
import Spinner from "../components/Spinner.vue";
import getProject from "../composables/getProject";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    Error,
    Spinner,
  },
  setup(props) {
    // const project = ref(null);
    // const error = ref(null);
    // const user = ref(null);

    // onMounted(async () => {
    //   ({ project, error } = getProject(props.id));
    //   ({ user, error } = getUser(project.userId));
    // });

    const { project, error } = getProject(props.id);

    return {
      project,
      error,
      //   user,
    };
  },
};
</script>