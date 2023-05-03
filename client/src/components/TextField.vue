<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
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
        <label class="text-sm font-extrabold text-slate-600 dark:text-slate-400 tracking-wide">{{ label }}</label>
        <input class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 hover:border-gray-500 dark:border-gray-700 focus:border-gray-500 transition-all" type="text" :placeholder="placeholder" />
    </div>
</template>