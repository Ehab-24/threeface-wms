<script setup lang="ts">
import { Customer, Invoice, Product } from '@/types';


defineEmits<{
    (event: 'click', ...args: any[]): void;
}>();
defineProps<{
    headers: string[],
    dataRecords: Invoice[] | Product[] | Customer[],
}>();

</script>

<template>
    <div class="relative overflow-x-hidden shadow-md sm:rounded-lg">
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
                        {{ Object.values(record)[0] }}
                    </th>
                    <td v-for="field in Object.values(record).slice(1)" class="px-6 py-4">
                        {{ field }}
                    </td>
                </tr>
                <slot name="body"></slot>
            </tbody>
        </table>
    </div>
</template>