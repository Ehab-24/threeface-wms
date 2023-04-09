<script setup lang="ts">
import {computed, defineProps } from 'vue'
import VB1 from './VB1.vue';
import VD1 from './VD1.vue';
import card2 from './Card2.vue';
const props = defineProps({
    content: {
        type: String,
        required: true
    }
    ,
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
     <div class=" md:w-full md:h-min items-center justify-between  flex flex-row items-start shadow-sm bg-gray-200 dark:bg-gray-900  px-8 py-4">
            <div class="flex flex-row">
            <VB1 >{{ props.content }}</VB1>
            <div class="lg:w-14"></div>
            <v-d1>{{ val }}</v-d1>
            </div>
        </div>
  </template>