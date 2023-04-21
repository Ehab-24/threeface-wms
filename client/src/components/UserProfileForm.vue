<script setup lang="ts">

import { updateUser } from '../repository/app/user';
import ElevatedButton from './ElevatedButton.vue';

const handleSubmit = async (e: any): Promise<void> => {
    const { name, photoURL } = e.target.elements;
    await updateUser({ name: name.value, photoURL: photoURL.value });
}

</script>


<template>
    <section class="w-full">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Settings
                    </h1>
                    <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6 flex flex-col items-center"
                        action="#">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                name</label>
                            <input type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                placeholder="name@company.com" required=true>
                        </div>
                        <div>
                            <label for="photoURL" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image
                                URL</label>
                            <input type="text" name="photoURL" id="photoURL" placeholder="https://loremflickr.com/320/240"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                required=true>
                        </div>

                        <elevated-button type="submit">
                            Update
                        </elevated-button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>