<script setup>

import { defineProps } from 'vue'

import VB1 from './VB1.vue'

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

        <font-awesome-icon :icon='icon' />

        <div class="w-16"></div>

        <v-b1>{{ title }}</v-b1>

    </router-link>
</template>