<script setup lang="ts">
import { Customer } from '../types';
import { User, getAuth } from '@firebase/auth';
import { getCustomers } from '../repository/db/customer';
import { Ref, ref } from 'vue';
import app from '../repository/db';
import DataTable from './DataTable.vue';
import VSpinner from './VSpinner.vue';
import { Router, useRouter } from "vue-router";
import { Timestamp } from '@firebase/firestore';

const user: User | null = getAuth(app).currentUser;

const customers: Ref<Customer[]> = ref([]);
getCustomers(user!.uid)
.then((data) => customers.value = data);


function TimestampToDate(timestamp: Timestamp): string {
    if (timestamp && timestamp.seconds) {
    return new Date(timestamp.seconds * 1000).toLocaleDateString();
  }
    return "0";
}

const router: Router = useRouter();

const tType: string = "Customers";

</script>


<template>
<div class="h-4"></div>
    <!-- * needs an empty header at the end to accomodate for 'Edit' column -->
    <DataTable :tableType=tType v-if="customers.length" :headers="['Name', 'Purchases', 'Total', 'Last Purchase']">
        <template #body>
           
        
        <tr v-for="customer in customers"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ customer.name }}
            </th>
            <td class="px-6 py-4">
                ${{ customer.totalSpent }}
            </td>
            <td class="px-6 py-4">
                {{ customer.numPurchases }}
            </td>
            <td class="px-6 py-4">
                {{ TimestampToDate(customer.lastPurchase) }}
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</a>
            </td>
        </tr>
    </template>
    </DataTable>
    <v-spinner v-else class="w-full grid place-items-center"/><div class="h-4"></div>
</template>