<script setup lang="ts">
import { Ref, ref } from "vue";
import type { Customer } from "../types/Customer";
import * as customerRepository from "../repository/app/warehouse/customer";

const emit = defineEmits<{ (e: 'add-customer', customer: Customer): void }>();

const customer: Ref<Customer> = ref({
  name: '',
  lastPurchase: new Date(),
  createdAt: new Date(),
  totalPurchases: 0,
  totalSpent: 0,
  warehouse: ''
});

const handleSubmit = (e: any): void => {
  e.preventDefault();

  customerRepository.createCustomer(customer.value).then((data) => {
    if (data) {
      emit('add-customer', data);
      console.log(data);
    }
  });
}

</script>

<template>
  <form @submit.prevent="handleSubmit">

    <div class="w-full flex flex-col gap-6">

      <label for="name" class="flex flex-col text-sm font-extrabold text-slate-600 dark:text-slate-400 tracking-wide">
        Name
        <input id="name" v-model="customer.name"
          class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 hover:border-gray-500 dark:border-gray-700 focus:border-gray-500 transition-all"
          type="text" placeholder="John Doe" />
      </label>
      <label for="total-purchases"
        class="flex flex-col text-sm font-extrabold text-slate-600 dark:text-slate-400 tracking-wide">
        Total purchases
        <input id="total-purchases" v-model="customer.totalPurchases"
          class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 hover:border-gray-500 dark:border-gray-700 focus:border-gray-500 transition-all"
          type="number" placeholder="03331234567" />
      </label>
      <label for="total-spent"
        class="flex flex-col text-sm font-extrabold text-slate-600 dark:text-slate-400 tracking-wide">
        Total spent
        <input id="total-spent" v-model="customer.totalSpent"
          class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 hover:border-gray-500 dark:border-gray-700 focus:border-gray-500 transition-all"
          type="number" placeholder="03331234567" />
      </label>
    </div>
    <div class="w-full flex justify-center mt-8 mb-4">
      <button
        class="h-9 px-20 rounded-md bg-green-600 hover:bg-green-500 text-sm  text-white shadow-md hover:shadow-lg font-bold transition-all"
        type="submit">Add</button>
    </div>
  </form>
</template>
