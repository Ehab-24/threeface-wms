<script setup>

import { computed, defineProps } from 'vue'

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
    return props.value > 999? (props.value / 1000).toFixed(1) + 'k' : props.value;
});

</script>


<template>
    <div class=" w-36 h-min flex flex-col items-start shadow-sm bg-gray-200 rounded-2xl p-4">

        <font-awesome-icon :icon='icon' class="pb-4 text-3xl text-gray-700"/>

        <h3 class="text-sm text-gray-700">{{ title }}</h3>

        <p class="text-2xl text-gray-900 font-bold">{{ val }}</p>

    </div>
</template>