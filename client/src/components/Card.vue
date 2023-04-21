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

    <div class="w-max   items-stretch shadow-lg bg-white dark:bg-gray-700 dark:bg-opacity-50 rounded-2xl px-4 py-3">

        <v-h1 class="pb-4">{{ title }}</v-h1>
        
        <slot name="body"></slot>

        <slot name="footer"></slot>
    </div>

</template>