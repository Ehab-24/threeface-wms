<script setup lang="ts">
import { createInvoice } from '../repository/db/invoice';
import { Invoice } from '../types/Invoice';
import { Ref, ref } from 'vue';
import ElevatedButton from './ElevatedButton.vue';
import VSpinner from './VSpinner.vue';
import { Timestamp } from '@firebase/firestore';

const loading: Ref<boolean> = ref(false);
const invoices: Ref<Invoice[]> = ref([]);

const handleCreateInvoice = async (e: any): Promise<void> => {
    loading.value = true;

    try {
        let invoice: Invoice = {
            customer: e.target.elements.customer.value as string,
            numProducts: e.target.elements.numProducts.value as number,
            totalAmount: e.target.elements.totalAmount.value as number,
            createdAt: Timestamp.now()
        };
        invoice = await createInvoice(invoice);
        invoices.value.push(invoice);
    }
    catch (error) {
        // TODO: Handle error
        console.log(error);
    }
    finally {
        loading.value = false;
    }
}

</script>

<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">

        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
            Flowbite
        </a>
        <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form @submit.prevent="handleCreateInvoice" class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="customer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Customer
                        </label>
                        <input type="text" name="customer" id="customer"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                            placeholder="John Doe" required=true>
                    </div>
                    <div>
                        <label for="numProducts" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Number of products
                        </label>
                        <input type="text" name="numProducts" id="numProducts" placeholder="5"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                            required=true>
                    </div>
                    <div>
                        <label for="totalAmount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Total amount
                        </label>
                        <input type="text" name="totalAmount" id="totalAmount" placeholder="99"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                            required=true>
                    </div>
                    <v-spinner v-if="loading" />
                    <elevated-button v-else type="submit" @click="handleCreateInvoice">
                        Create
                    </elevated-button>
                </form>
            </div>
        </div>
    </div>
</template>