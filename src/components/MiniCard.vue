<script setup lang="ts">

import { computed, defineProps } from 'vue'

import VB1 from './VB1.vue';
import VD1 from './VD1.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
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
    <div class=" w-36 h-min flex flex-col items-start shadow-sm bg-gray-200 rounded-2xl p-4">

        <div class="w-6 h-6 mb-4 bg-gray-500">ico</div>

        <VB1>{{ title }}</VB1>

        <v-d1>{{ val }}</v-d1>

    </div>
</template>