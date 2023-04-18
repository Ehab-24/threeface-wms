<script setup lang="ts">
import ElevatedButton from '../components/ElevatedButton.vue';
import VH1 from '../components/VH1.vue';
</script>

<template>
    <div
        class="h-16  flex px-4 mb-4 justify-between items-center border-b-2 dark:border-b-gray-700">

        <div class="flex items-center">
            <v-h1>
                <slot></slot>
            </v-h1>
        </div>
        <div class="flex gap-5">
            <elevated-button>Month to Date</elevated-button>
            <elevated-button>Year to Date</elevated-button>
            <elevated-button>Export</elevated-button>
        </div>
    </div>
</template>