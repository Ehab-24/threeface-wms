<script setup lang="ts">

import Titlebar from '../components/Titlebar.vue';
import Sidebar from '../components/Sidebar.vue';

</script>


<template>
    <div class="h-screen bg-gray-200">
        <Titlebar />

        <div class="flex">

            <Sidebar />

            <!-- router-view when user is authenticated -->
            <div class="px-8 py-4">
                <router-view />
            </div>
        </div>
    </div>
</template>