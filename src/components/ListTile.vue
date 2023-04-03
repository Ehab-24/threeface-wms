<script setup>

import { defineProps } from 'vue'

import VH3 from './VH3.vue'

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
    <router-link :to='link' class="h-min px-4 py-2 my-1 flex rounded-lg hover:bg-gray-300 transition-all">

        <font-awesome-icon :icon='icon' />

        <div class="w-16"></div>

        <v-h3>{{ title }}</v-h3>

    </router-link>
</template>