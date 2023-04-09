<script setup lang="ts">
import { Customer } from '../types';
import DataTable from './DataTable.vue';

// Customers will be fetched from repository
const customers: Customer[] = [
    {
        name: 'James Bond',
        totalSpent: 1299,
        lastPurchase: new Date(),
        numPurchases: 4
    },
    {
        name: 'Helly Kerrale',
        totalSpent: 550,
        lastPurchase: new Date(),
        numPurchases: 2
    },
    {
        name: 'Huger Freeman',
        totalSpent: 499,
        lastPurchase: new Date(),
        numPurchases: 1
    },
    {
        name: 'Asper Hudini',
        totalSpent: 2290,
        lastPurchase: new Date(),
        numPurchases: 6
    },
    {
        name: 'Floyd Maywether',
        totalSpent: 60,
        lastPurchase: new Date(),
        numPurchases: 1
    },
];

</script>

<template>
    <!-- * needs an empty header at the end to accomodate for 'Edit' column -->
    <DataTable :headers="['Name', 'Purchases', 'Total', 'Last Purchase', '']">
        <tr v-for="customer in customers" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ customer.name }}
            </th>
            <td class="px-6 py-4">
                {{ customer.totalSpent }}
            </td>
            <td class="px-6 py-4">
                {{ customer.numPurchases }}
            </td>
            <td class="px-6 py-4">
                {{ customer.lastPurchase }}
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</a>
            </td>
        </tr>
    </DataTable>
</template>