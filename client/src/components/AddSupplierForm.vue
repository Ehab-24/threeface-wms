<script setup lang="ts">
import { Ref, ref } from "vue";
import type { Supplier } from "../types/Supplier";
import * as supplierRepository from "../repository/app/warehouse/supplier";

const emit = defineEmits<{ (e: 'add-supplier', supplier: Supplier): void }>();

const supplier: Ref<Supplier> = ref({
  name: '',
  lastSupplied: new Date(),
  createdAt: new Date(),
  totalSupplies: 0,
  totalSold: 0,
  warehouse: ''
});

const handleSubmit = (e: any): void => {
  e.preventDefault();

  supplierRepository.createSupplier(supplier.value).then((data) => {
    if (data) {
      emit('add-supplier', data);
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
        <input id="name" v-model="supplier.name"
          class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 hover:border-gray-500 dark:border-gray-700 focus:border-gray-500 transition-all"
          type="text" placeholder="John Doe" />
      </label>
      <label for="total-supplies"
        class="flex flex-col text-sm font-extrabold text-slate-600 dark:text-slate-400 tracking-wide">
        Total supplies
        <input id="total-supplies" v-model="supplier.totalSupplies"
          class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 hover:border-gray-500 dark:border-gray-700 focus:border-gray-500 transition-all"
          type="number" placeholder="03331234567" />
      </label>
      <label for="total-sold"
        class="flex flex-col text-sm font-extrabold text-slate-600 dark:text-slate-400 tracking-wide">
        Total sold
        <input id="total-sold" v-model="supplier.totalSold"
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
