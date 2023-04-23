<script setup lang="ts">
import { Ref, ref } from "vue";
import ElevatedButton from "../components/ElevatedButton.vue";
import type { Customer } from "../types/Customer";


const customer: Ref<Customer> = ref({
  name: "",
  totalSpent: 0,
  numPurchases: 0,
  lastPurchase: new Date(),
});



</script>

<template>
  <form @submit.prevent="() => {}">

    <div>
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Customer Name</label>
      <input id="name" v-model="customer.name"
        class="bg-gray-50 w-1/4 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
        placeholder="Customer Name" required=true />
    </div>
    <div>
      <label for="totalSpent" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Total Spent</label>
      <input id="totalSpent" v-model="customer.totalSpent"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-pink-500 dark:focus:border-pink-500"
        placeholder="#$1000" required=true />
      <div>
        <label for="numPurchases" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Number Of
          Purchases</label>
        <input id="numPurchases" v-model="customer.numPurchases"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-pink-500 dark:focus:border-pink-500"
          placeholder="#10" required=true />

      </div>
    </div>
    <div>
      <ElevatedButton type="submit">Add</ElevatedButton>
    </div>
  </form>
</template>
