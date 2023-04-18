<script setup lang="ts">

import app from '../repository/db';
import { getInvoices } from '../repository/db/invoice';
import { Invoice } from '../types/Invoice';
import { User, getAuth } from '@firebase/auth';
import { Ref, ref } from 'vue';
import DataTable from './DataTable.vue';
import VSpinner from './VSpinner.vue';

let invoices: Ref<Invoice[]> = ref([]);

const user: User | null = getAuth(app).currentUser; 
getInvoices(user!.uid)
.then((data) => invoices.value = data);

</script>

<template>
    <!-- * needs an empty header at the end to accomodate for 'Edit' column -->
    <DataTable v-if="invoices.length" :headers="['Customer', 'Total', 'no. of Products', 'Date', '']">
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
    <v-spinner v-else class="w-full grid place-items-center"/>
</template>