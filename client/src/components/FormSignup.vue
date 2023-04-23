<script setup lang="ts">

import { register, sendVerificationCode } from '../repository/auth';

const emit = defineEmits(['verify-code', 'login']);

const handleSignup = async (e: any): Promise<void> => {
    const { email, password, confirmPassword } = e.target.elements;
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        return;
    }

    try {
        await register(email.value, password.value)
            .then((_) => {
                sendVerificationCode(email.value, password.value)
                    .then((_) => {
                        alert('Please check your email for a verification code');
                        emit('verify-code');
                    })
            })
    }
    catch (error: any) {
        alert(error.response.data?.message)
    }

}

</script>

<template>
    <section class="w-full h-full bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="w-full flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form @submit.prevent="handleSignup" class="space-y-4 md:space-y-6">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                placeholder="name@company.com" required=true>
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                required=true>
                        </div>
                        <div>
                            <label for="confirmPassword"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                required=true>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
                                    required=true>
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a
                                        class="font-medium text-green-600 hover:underline dark:text-green-500"
                                        href="data:image/jpeg;base64,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">Terms
                                        and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create
                            an account
                        </button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?
                            <button @click="emit('login')"
                                class="font-medium text-green-600 hover:underline dark:text-green-500">
                                Login here
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>