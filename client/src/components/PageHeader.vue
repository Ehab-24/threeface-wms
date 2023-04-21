<script setup lang="ts">
import ElevatedButton from '../components/ElevatedButton.vue';
import VH1 from '../components/VH1.vue';
</script>

<template>
    <div
        class="h-16 w-screen grid grid-flow-col-dense place-content-stretch  ">

        <div class=" ">
            <v-h1>
                <slot></slot>
            </v-h1>
        </div>
       
        <div class="flex gap-3">
            <elevated-button>Month to Date</elevated-button>
            <elevated-button>Year to Date</elevated-button>
            <elevated-button>Export</elevated-button>
        </div>
    </div>
</template>