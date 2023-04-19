<script setup lang="ts">

import Titlebar from '../components/Titlebar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>


<template>

    

    <div class=" min-h-screen overflow-x-hidden  w-full bg-gray-200 dark:bg-gradient-to-r from-gray-900 to-gray-800 text-gray-900 dark:text-white">
        <Titlebar />

        <div class="flex ">

            <Sidebar />
             
      
            <div class="  2xl:pl-10 xl:pl-10  py-4">
                <router-view />   
            </div>
        </div>
    </div>
    
</template>