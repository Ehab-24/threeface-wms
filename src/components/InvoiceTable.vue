<script setup lang="ts">

import { Invoice } from '@/types/Invoice';
import { Timestamp } from '@firebase/firestore';
import { Ref, ref } from 'vue';
import DataTable from './DataTable.vue';

const invoices: Ref<Invoice[]> = ref([
    {
        customer: 'John Doe',
        totalAmount: 100,
        numProducts: 2,
        createdAt: Timestamp.fromMillis(1581038066072),
    },
    {
        customer: 'Kolbe Kyler',
        totalAmount: 3000,
        numProducts: 7,
        createdAt: Timestamp.fromMillis(1641038066072),
    },
    {
        customer: 'Hella Doe',
        totalAmount: 1100,
        numProducts: 4,
        createdAt: Timestamp.fromMillis(1621038066072),
    },
]);

</script>

<template>
    <!-- * needs an empty header at the end to accomodate for 'Edit' column -->
    <DataTable :headers="['Customer', 'Total', 'no. of Products', 'Date', '']">
        <template #body>
            <tr v-for="invoice in invoices" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ invoice.customer }}
                </th>
                <td class="px-6 py-4">
                    {{ invoice.totalAmount }}
                </td>
                <td class="px-6 py-4">
                    {{ invoice.numProducts }}
                </td>
                <td class="px-6 py-4">
                    {{ invoice.createdAt }}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</a>
                </td>
            </tr>
        </template>
    </DataTable>
</template>