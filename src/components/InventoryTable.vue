<script setup lang="ts">
import { InventoryItem } from '@/types';
import DataTable from './DataTable.vue';

// InventoryItems will be fetched from repository
const inventoryItems: InventoryItem[] = [
    {
        name: 'James Bond',
        price: 1299,
        createdAt: new Date(),
        quantity: 4
    },
    {
        name: 'Helly Kerrale',
        price: 550,
        createdAt: new Date(),
        quantity: 2
    },
    {
        name: 'Huger Freeman',
        price: 499,
        createdAt: new Date(),
        quantity: 1
    },
    {
        name: 'Asper Hudini',
        price: 2290,
        createdAt: new Date(),
        quantity: 6
    },
    {
        name: 'Floyd Maywether',
        price: 60,
        createdAt: new Date(),
        quantity: 1
    },
];

</script>

<template>
    <!-- * needs an empty header at the end to accomodate for 'Edit' column -->
    <DataTable :headers="['Name', 'Price', 'Quantity', 'Created At', '']">
        <tr v-for="inventoryItem in inventoryItems" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ inventoryItem.name }}
            </th>
            <td class="px-6 py-4 font-extrabold text-green-900">
                ${{ inventoryItem.price }}
            </td>
            <td class="px-6 py-4">
                {{ inventoryItem.quantity }}
            </td>
            <td class="px-6 py-4">
                {{ inventoryItem.createdAt }}
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</a>
            </td>
        </tr>
    </DataTable>
</template>