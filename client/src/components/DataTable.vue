<script setup lang="ts">
import { defineProps, ref } from "vue";
import PForm from "./AddProductForm.vue";
import VH1 from "./VH1.vue";

defineProps<{
  headers: string[];
}>();

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const title = ref("Modal Title");
const message = ref("Modal Message");
const confirmButtonText = ref("Confirm");
const cancelButtonText = ref("Cancel");
</script>

<template>
  <!-- This is a base component to assist concrete implementations of DataTable. Kind of like an abstract class -->
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            v-for="header in headers"
            :key="header"
            scope="col"
            class="px-6 py-3"
          >
            {{ header }}
          </th>
          <th>
            <button
              class="px-2 text-3xl grid dark:bg-gray-300 bg-black bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 rounded-full transition-all ml-4"
              @click="openModal"
            >
              +
            </button>
            <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
              <div class="flex items-center justify-center min-h-screen">
                <div class="fixed inset-0 bg-black opacity-75"></div>

                <div
                  class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                >
                  <button
                    type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    @click="closeModal"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div class="px-6 py-6 lg:px-8">
                    <div class="text-center py-4">
                        <VH1>Add Product</VH1>
                    </div>
                    <Suspense>
                      <PForm />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="body"></slot>
      </tbody>
    </table>
  </div>
</template>
