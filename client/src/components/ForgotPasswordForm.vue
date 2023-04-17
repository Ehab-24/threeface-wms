<script setup lang="ts">

import handleForgotPassword from '../composables/auth/handleForgotPassword';

const onSubmit = (e: any) => handleForgotPassword(e);

</script>


<template>
    <section class="w-full h-full bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">

            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Enter your email
                    </h1>
                    <form @submit.prevent="onSubmit" class="space-y-4 md:space-y-6" action="#">

                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email
                            </label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                placeholder="name@company.com" required=true>
                        </div>

                        <button type="submit"
                            class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Send email
                        </button>

                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Remembered password yet?

                            <router-link to="/login" class="font-medium text-green-600 hover:underline dark:text-green-500">
                                Log in
                            </router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>