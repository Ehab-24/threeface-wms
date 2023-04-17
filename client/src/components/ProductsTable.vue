<script setup lang="ts">
import { Product } from '../types';
import { User, getAuth } from '@firebase/auth';
import { getProducts } from '../repository/db/product';
import { Ref, ref } from 'vue';
import app from '../repository/db';
import DataTable from './DataTable.vue';
import VSpinner from './VSpinner.vue';

const user: User | null = getAuth(app).currentUser;

const products: Ref<Product[]> = ref([]);
getProducts(user!.uid)
.then((data) => products.value = data);

</script>

<template>
    <!-- TODO: Exception handling using error boundaries -->

    <!-- * needs an empty header at the end to accomodate for 'Edit' column -->
    <DataTable v-if="products.length" :headers="['Name', 'Price', 'Quantity', 'Created At', '']">
        <template #body>
            <tr v-for="product in products" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ product.name }}
                </th>
                <td class="px-6 py-4 font-extrabold text-green-900 dark:text-green-100">
                    ${{ product.price }}
                </td>
                <td class="px-6 py-4">
                    {{ product.quantity }}
                </td>
                <td class="px-6 py-4">
                    {{ product.createdAt }}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</a>
                </td>
            </tr>

        </template>
    </DataTable>
    
    <v-spinner v-else class="w-full grid place-items-center"/>
</template>