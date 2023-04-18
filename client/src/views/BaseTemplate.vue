<script setup lang="ts">

import Titlebar from '../components/Titlebar.vue';
import Sidebar from '../components/Sidebar.vue';

</script>


<template>

    

    <div class="h-full 2xl:h-screen xl:h-screen xl:w-full 2xl:w-full lg:w-full md:w-max sm:w-max bg-gray-200 dark:bg-gradient-to-r from-gray-900 to-gray-800 text-gray-900 dark:text-white">
        <Titlebar />

        <div class="flex min-h-[calc(100%-64px)]">

            <Sidebar />
             
      
            <div class="w-full px-8 py-4">
                <router-view />   
            </div>
        </div>
    </div>
    
</template>