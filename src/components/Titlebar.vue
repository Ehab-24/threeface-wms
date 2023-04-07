<script setup lang="ts">

import TextField from './TextField.vue';
import IconButton from './IconButton.vue';
import handleSignout from '../composables/auth/handleSignout';
import { useRouter } from 'vue-router';

const router = useRouter();
const pushProfilePage = () => router.push('/profile');

</script>


<template>
    <div class="h-16 px-8 flex justify-between items-center border-b-2 bg-white shadow-lg">

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