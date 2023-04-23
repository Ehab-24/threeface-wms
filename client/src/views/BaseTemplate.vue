<script setup lang="ts">

import Titlebar from '../components/Titlebar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>


<template>

    

    <div class=" min-h-0 h-full overflow-x-hidden  w-full  bg-gray-200 dark:bg-gradient-to-r from-gray-900 to-gray-800 text-gray-900 dark:text-white">
        <Titlebar />

        <div class="flex    ">

          <div class=" items-start"><Sidebar /></div>
             
      
            <div class=" pr-3 pt-4 pl-10 ">
                <router-view />   
            </div>
        </div>
    </div>
    
</template>