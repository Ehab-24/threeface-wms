<script setup lang="ts">
import { Ref, ref } from "vue";
import ElevatedButton from "../components/ElevatedButton.vue";
import type { Product } from "../types/Product";

const product: Ref<Product> = ref({
  name: "",
  price: 0,
  quantity: 0,
  createdAt: new Date(),
  warehouse: ''
});


const add = async (id:any): Promise<void> => {
  // createProduct(user.uid, product.value);
};
</script>

<template>
  <form @submit.prevent="() => add(1)">
    <div>
      <label
        for="name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50"
        >Product Name</label
      >
      <input
        id="name"
        v-model="product.name"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        placeholder="Tanki Tappa"
        required="true"
      />
    </div>
    <div>
      <label
        for="price"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50"
        >Price</label
      >
      <input
        id="price"
        v-model="product.price"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-green-500 dark:focus:border-green-500"
        placeholder="100"
        required="true"
      />
    </div>

    <div>
      <label
        for="quantity"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50"
        >Quantity</label
      >
      <input
        id="quantity"
        v-model="product.quantity"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-green-500 dark:focus:border-green-500"
        placeholder="4"
        required="true"
      />
    </div>

    <div>
      <ElevatedButton type="submit">Add</ElevatedButton>
    </div>
  </form>
</template>
