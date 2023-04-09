<script setup lang="ts">
</script>


<template>
    <button
        class="w-36 h-10 rounded-md bg-gray-600 hover:text-green-900 hover:bg-green-300 text-sm text-white shadow-md hover:shadow-lg font-bold transition-all"
        v-bind="$attrs">
        <slot>Button</slot>
    </button>
</template>