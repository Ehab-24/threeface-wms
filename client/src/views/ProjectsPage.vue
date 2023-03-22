
<script>
import Heading1 from "../components/Heading1.vue";
import TextField from "../components/TextField.vue";
import ProjectList from "../components/ProjectList.vue";
import OutlinedButton from "../components/OutlinedButton.vue";
import CreateProjectModal from "../components/CreateProjectModal.vue";

export default {
  name: "projects",
  components: {
    ProjectList,
    Heading1,
    TextField,
    OutlinedButton,
    CreateProjectModal,
  },
  setup() {
    return {};
  },
};
</script>


<template>
  <div class="w-full md:w-2/3 mt-8">
    <div class="flex justify-between items-center">
      <heading-1>Projects</heading-1>
      <CreateProjectModal />
    </div>

    <project-list />
  </div>
</template>

