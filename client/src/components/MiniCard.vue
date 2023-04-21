<script setup lang="ts">

import { computed, defineProps } from 'vue'
import VB1 from './VB1.vue';
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
    <div class=" w-max h-min flex flex-row items-start shadow-sm bg-gray-200 dark:bg-gray-900 rounded-2xl p-5">

        <slot name="icon"></slot>

        <div class="w-7"></div>
        <div class="flex flex-col">
            <VB1>{{ title }}</VB1>

            <v-d1>{{ val }}</v-d1>
        </div>
    </div>
</template>