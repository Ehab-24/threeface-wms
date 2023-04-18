<script setup lang="ts">

import TextField from './TextField.vue';
import IconButton from './IconButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const pushProfilePage = () => router.push('/profile');

</script>


<template>

    

    <div class="h-16 px-8 flex  justify-between items-center border-b-2 dark:border-b-gray-900 bg-whitedark:bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">

        <div class="flex items-center">

            <router-link to="/" class="text-xl">
                LOGO
            </router-link>
             
            <div class="w-16"></div>

            <TextField placeholder="Search" />

        </div>

        <IconButton @click="pushProfilePage"/>

    </div>
</template>


  