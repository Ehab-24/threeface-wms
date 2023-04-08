<script setup lang="ts">

import { defineProps } from 'vue'

import VH3 from './VH3.vue'

defineProps({
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
    <router-link :to='link' class="h-min px-4 py-2 my-1 flex rounded-lg bg-gray-900 dark:bg-white bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-10 transition-all">

        <div class="w-6 h-6 bg-gray-500">ico</div>

        <div class="w-12"></div>

        <v-h3>{{ title }}</v-h3>

    </router-link>
</template>