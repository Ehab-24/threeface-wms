<script setup lang="ts">

import TextField from './TextField.vue';
import IconButton from './IconButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const pushProfilePage = () => router.push('/profile');

</script>


<template>

    


    <div class="h-16 px-8 flex  justify-between items-center border-b-2 dark:border-b-gray-900 bg-whitedark:bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">


        <div class="flex  items-center gap-4">
          <div> <svg class="h-8 w-8 text-teal-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="12 2 2 7 12 12 22 7 12 2" />  <polyline points="2 17 12 22 22 17" />  <polyline points="2 12 12 17 22 12" /></svg>
              </div>

            <router-link to="/" class="text-xl text-teal-500">
               Threeface
            </router-link>
             
            <div class="w-20"></div>

            <TextField placeholder="Search" />

        </div>

        <IconButton @click="pushProfilePage"/>

    </div>
</template>


  