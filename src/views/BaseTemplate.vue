<script setup lang="ts">

import Titlebar from '../components/Titlebar.vue';
import Sidebar from '../components/Sidebar.vue';

</script>


<template>
    <div class="h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Titlebar />

        <div class="flex min-h-[calc(100%-64px)]">

            <Sidebar />

            <!-- router-view when user is authenticated -->
            <div class="w-full px-8 py-4">
                <router-view />
            </div>
        </div>
    </div>
</template>