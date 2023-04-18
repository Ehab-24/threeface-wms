<script setup lang="ts">

import { defineProps } from 'vue'
import VH1 from './VH1.vue';

defineProps({
    title: {
        type: String,
        required: true
    }
});

</script>


<template>

    <div class="md:w-max  md:h-min sm:w-min  sm:h-min shadow-lg bg-white dark:bg-gray-800 rounded-2xl px-6 py-4">

        <v-h1 class="pb-4">{{ title }}</v-h1>
        
        <slot name="body"></slot>

        <slot name="footer"></slot>
    </div>

</template>