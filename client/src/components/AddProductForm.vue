<script setup lang="ts">
import { Ref, ref } from "vue";
import ElevatedButton from "../components/ElevatedButton.vue";
import type { Product } from "../types/Product";
import { createProduct } from "../repository/db/product";
import { getUserState } from "../repository/authentication";

const product: Ref<Product> = ref({
  name: "",
  price: 0,
  quantity: 0,
  createdAt: new Date(),
});

const user: any = await getUserState();

const add = async (id:any ): Promise<void> => {
  createProduct(user.uid, product.value);
};
</script>



<template>
  <form @submit.prevent="() => add(user.uid)">
    <div>
      <input
        id="name"
        v-model="product.name"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        placeholder="Product Name"
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
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-green-500 dark:focus:border-green-500"
        placeholder="Price"
        v-model="product.price"
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
        placeholder="Quantity"
        required="true"
      />
    </div>

    <div class="flex justify-center py-2">
      <ElevatedButton type="submit">Add</ElevatedButton>
    </div>
  </form>
</template>
