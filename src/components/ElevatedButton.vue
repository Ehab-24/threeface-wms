<script setup lang="ts">

import { defineProps } from 'vue'

defineProps({
    type: {
        type: String,
        default: 'text'
    }
})

</script>


<template>
    <button :type="type"
        class="w-24 h-9 rounded-md bg-pink-600 hover:bg-pink-500 text-sm text-white shadow-md hover:shadow-lg font-bold transition-all" v-bind="$attrs">
        <slot>Button</slot>
    </button>
</template>