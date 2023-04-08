<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    label: {
        type: String
    },
    placeholder: {
        type: String,
        required: true
    }
});
</script>




<template>
    <div class="flex flex-col">
        <label class="text-sm text-gray-700">{{ label }}</label>
        <input class="px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-500 focus:outline-none focus:border-gray-500 transition-all" type="text" :placeholder="placeholder" />
    </div>
</template>