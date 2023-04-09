<script setup lang="ts">

import Titlebar from '../components/Titlebar.vue';
import Sidebar from '../components/Sidebar.vue';

</script>


<template>

    

    <div class="md:h-[100%] bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Titlebar />

        <div class="md:flex min-h-[calc(100%-64px)]">

            <Sidebar />
             
            <!-- router-view when user is authenticated -->
            <div class="w-full  ">
                <router-view />

                
            </div>
        </div>
    </div>
    
</template>