<script>
import useValidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
import { ref, reactive } from "vue";

import OutlinedButton from "./OutlinedButton.vue";
import Modal from "./Modal.vue";

import createProject from "../composables/project/createProject.js";
import Project from "../models/Project.js";

export default {
  components: {
    OutlinedButton,
    Modal,
  },
  setup() {
    // Form Validation
    const state = reactive({
      project: {
        title: "",
        description: "",
      },
    });
    const customValidation = (description) => {
      return state.project.title.toLowerCase() !== description.toLowerCase();
    };
    const rules = {
      project: {
        title: {
          required,
          maxLength: maxLength(20),
        },
        description: {
          maxLength: maxLength(256),
          desc_validation: {
            $validator: customValidation,
            $message: "Title and description must not be same",
          },
        },
      },
    };
    const v$ = useValidate(rules, state);

    // State Management
    const isModalVisible = ref(false);
    const showModal = () => (isModalVisible.value = true);
    const closeModal = () => {
      isModalVisible.value = false;
    };

    // Functionality
    const handleSubmit = (e) => {
      const { title, description } = e.target.elements;
      createProject(new Project(null, title.value, description.value, new Date(), new Date(), 'open'));
    };

    return {
      v$,
      handleSubmit,
      isModalVisible,
      showModal,
      closeModal,
    };
  },
};
</script>


<template>
  <outlined-button @click="showModal"> New </outlined-button>

  <modal v-show="isModalVisible" @close="closeModal">
    <template v-slot:header>
      <h1 class="text-gray-200 text-xl">Title</h1>
    </template>
    <template v-slot:body>
      <form @submit.prevent="handleSubmit">
        <!-- Email -->
        <div>
          <input
            v-model="v$.project.title.$model"
            type="text"
            name="title"
            placeholder="Title"
            class="w-full h-10 md:w-[400px] px-2 flex bg-black bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-30 text-gray-200 caret-gray-200 rounded-md outline-none"
            autofocus
          />
          <span
            v-if="v$.project.title.$errors.length"
            class="text-red-400 text-sm"
            >{{ v$.project.title.$errors[0].$message }}</span
          >
        </div>

        <!-- Password -->
        <div>
          <input
            v-model="v$.project.description.$model"
            type="text"
            name="description"
            placeholder="Description"
            class="w-full h-10 md:w-[400px] mt-4 px-2 flex bg-black bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-30 text-gray-200 caret-gray-200 rounded-md outline-none"
          />
          <span
            v-if="v$.project.description.$errors.length"
            class="text-red-400 text-sm"
          >
            {{ v$.project.description.$errors[0].$message }}
          </span>
        </div>

        <!-- Submit -->
        <button
          :disabled="v$.project.$invalid"
          class="mt-4 px-2 py-1 disabled:cursor-not-allowed rounded-sm text-white bg-white bg-opacity-10 hover:bg-background2 disabled:hover:bg-white disabled:hover:bg-opacity-10 transition-all"
        >
          Create
        </button>
      </form>
    </template>
  </modal>
</template>




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