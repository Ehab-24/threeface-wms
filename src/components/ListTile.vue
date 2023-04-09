<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    title: {
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
    <router-link :to='link'
        class="h-min px-4 py-2 my-1 flex rounded-lg bg-black dark:bg-white bg-opacity-0 hover:bg-opacity-5 text-black dark:text-gray-200 hover:text-green-600 transition-all">
        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <slot name="icon"></slot>
        </svg>

        <div class="w-7 "></div>

        <p class="text-md font-medium tracking-wide">
            {{ title }}
        </p>
    </router-link>
</template>