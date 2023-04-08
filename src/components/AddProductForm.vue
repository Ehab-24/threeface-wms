<script setup>

import { ref } from 'vue';
import {getFirestore, collection, addDoc} from "firebase/firestore"
import ElevatedButton from '../components/ElevatedButton.vue';


const productname =   ref('');
const price = ref('');
const quantity = ref('');

const createProduct = async () => {
  const db = getFirestore()
  const productsRef = collection(db, 'products')
  await addDoc(productsRef, {
    name: productname.value,
    price: price.value,
    quantity: quantity.value
   })
}
</script>


<template>


    <form @submit.prevent="createProduct">
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Product Name</label>
            <input id="name" v-model="productname" 
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            placeholder="Tanki Tappa" required="" />
        </div>
        <div>
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Price</label>
            <input id="price" v-model="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            placeholder="170" required="" />
        </div>

        <div>
            <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
            <input id="quantity" v-model="quantity"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            placeholder="4" required="" />
        </div>

        <div>
            <ElevatedButton type="submit">Add</ElevatedButton>
        </div>
    </form>


</template>