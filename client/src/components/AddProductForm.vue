<script setup lang="ts">
import { Ref, ref } from "vue";
import ElevatedButton from "../components/ElevatedButton.vue";
import type { Product } from "../types/Product";
import { createProduct } from "../repository/db/product";
import { getUserState } from "../repository/authentication";
import { Timestamp } from "@firebase/firestore";

const product: Ref<Product> = ref({
  name: "",
  price: 0,
  quantity: 0,
  createdAt: Timestamp.fromDate(new Date()),
});

const user: any = await getUserState();

const add = async (id: any): Promise<void> => {
  createProduct(user.uid, product.value);
};
</script>

<template>
  <form @submit.prevent="() => add(user.uid)">
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Name</label
        >
        <input
          type="text"
          name="name"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary-500 dark:focus:border-primary-500"
          placeholder="Type product name"
          v-model = "product.name"
          required
        />
      </div>
      
      <div>
        <label
          for="price"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Price</label
        >
        <input
          type="text"
          name="price"
          id="price"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="$2999"
          v-model="product.price"
          required
        />
      </div>
      <div>
        <label
          for="Quantity"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Quantity</label
        >
        <input
          type="text"
          name="Quantity"
          id="quantity"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Product Quantity"
          v-model = "product.quantity"
          required
        />
      </div>
      <div class="sm:col-span-2">
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Description</label
        >
        <textarea
          id="description"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Write product description here"
        ></textarea>
      </div>
    </div>
    <div class="flex justify-center py-2">
      <ElevatedButton type="submit">Add New Product</ElevatedButton>
    </div>
  </form>
</template>
