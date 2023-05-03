<script setup lang="ts">
import { Customer, Invoice, Product, Supplier } from '@/types';


defineEmits<{
    (event: 'click', ...args: any[]): void;
}>();
defineProps<{
    headers: string[],
    dataRecords: Invoice[] | Product[] | Supplier[] | Customer[],
}>();

</script>

<template>
    <div class="w-full relative overflow-x-hidden shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th v-for="header in headers" :key="header" scope="col" class="px-6 py-3">
                        {{ header }}
                    </th>
                    <th>
                        <button
                            class="w-20 text-2xl grid dark:bg-gray-300 bg-black bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all"
                            @click="$emit('click')">+</button>
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="record in dataRecords" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ Object.values(record)[2] }}
                    </th>
                    <td v-for="field in Object.values(record).slice(3, Object.keys(record).length - 1)" class="px-6 py-4">
                        {{ field }}
                    </td>
                    <td class="px-6 py-4">
                        <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    </td>
                </tr>
                <slot name="body"></slot>
            </tbody>
        </table>
    </div>
</template>
