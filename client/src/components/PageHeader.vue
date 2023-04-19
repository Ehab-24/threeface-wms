<script setup lang="ts">
import ElevatedButton from '../components/ElevatedButton.vue';
import VH1 from '../components/VH1.vue';
</script>

<template>
    <div
        class="h-16  w-3/4 flex px-4 mb-4  lg:justify-between md:justify-start sm:justify-start md:gap-5 items-center  ">

        <div class="flex  ">
            <v-h1>
                <slot></slot>
            </v-h1>
        </div>
       
        <div class="flex  lg:gap-5 md:gap-2 sm:gap-1">
            <elevated-button>Month to Date</elevated-button>
            <elevated-button>Year to Date</elevated-button>
            <elevated-button>Export</elevated-button>
        </div>
    </div>
</template>