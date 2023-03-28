<script setup>

import { defineProps } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

</script>



<template>
    
    <router-link :to='link' class="h-min px-4 py-2 my-1 rounded-lg flex justify-between hover:bg-gray-300 transition-all">
    
        <font-awesome-icon :icon='icon'/>

        <div class="w-16"></div>
        
        <h2 class="text-sm text-gray-700">{{ title }}</h2>
    
    </router-link>

</template>