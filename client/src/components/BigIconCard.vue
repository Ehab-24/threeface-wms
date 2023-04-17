<script setup lang="ts">

import { defineProps , computed } from 'vue'
import VH1 from './VH1.vue';
import VD1 from './VD1.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
});

const val = computed(() => {
    return props.value > 999 ? (props.value / 1000).toFixed(1) + 'k' : props.value;
});

</script>


<template>

<div class="w-80 h-min shadow-lg bg-white dark:bg-gray-800 rounded-2xl p-4">
    <div class="flex flex-row">
            <div class="w-12 h-12 mb-4 mt-4 bg-gray-500">icon</div>

            <div class = "flex flex-col pb-2 pt-2 pl-4 whitespace-nowrap">
                <VH1 class="">{{ title }}</VH1>
                <VD1>{{ val }}</VD1>
            </div>
    </div>
</div>
    

        
        <!-- <slot name="body"></slot>

        <slot name="footer"></slot> -->
    

</template>