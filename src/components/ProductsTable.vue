<script setup lang="ts">

import { getUserState } from "../repository/authentication";
import {getProduct} from "../repository/db/product";
import { Product } from "../types/Product";

const user: any = await getUserState();
const products:Product[] = await getProduct(user.uid)

</script>

<template>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="Productx in products">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ Productx.name }}
                </th>
                <td class="px-6 py-4">
                    {{ Productx.quantity }}
                </td>
                <td class="px-6 py-4">
                    {{Productx.price}}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


</template>
