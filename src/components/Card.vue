<script setup>

import { defineProps } from 'vue'

defineProps({
    title: {
        type: String,
        required: true
    }
});

</script>


<template>

    <div class="w-min h-min shadow-lg bg-white rounded-2xl p-4">

        <h2 class="pb-4 font-bold">{{ title }}</h2>
        
        <slot name="body"></slot>

        <slot name="footer"></slot>
    </div>

</template>