<script setup lang="ts">
import ibutton from '../components/ElevatedButton.vue';
import { defineProps } from 'vue';
import VH1 from '../components/VH1.vue';
const props = defineProps ({
    title: {
        type: String,
        required: true
    },
   
});

</script>

<template>
    
    <div class="h-16 flex px-8 flex  justify-between items-center border-b-2 dark:border-b-gray-900 bg-white dark:bg-gray-800 shadow-lg">

<div class="flex items-center">
    <v-h1>{{props.title}}</v-h1>
</div>
<div class="flex gap-5">
    <ibutton>Month to Date</ibutton><ibutton>Year to Date</ibutton><ibutton>Export</ibutton>
</div>
</div>
</template>