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

<div class="w-max h-min grid grid-flow-col place-content-strecth shadow-lg bg-white dark:bg-gray-700 dark:bg-opacity-50 rounded-2xl p-4">
   
    <div class="pt-4 place-items-start"><slot name="icon"> </slot></div>
       

            <div class = "grid grid-flow-row place-item-end pb-2 pt-2 pl-4 whitespace-nowrap">
                <VH1 class="">{{ title }}</VH1>
                <VD1>{{ val }}</VD1>
            </div>
    </div>

    

        
        <!-- <slot name="body"></slot>

        <slot name="footer"></slot> -->
    

</template>