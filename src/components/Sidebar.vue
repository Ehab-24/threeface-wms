<script setup lang="ts">

import ListTile from './ListTile.vue';
import VH2 from './VH2.vue';

const data = [
    {
        title: 'Home',
        icon: "homeicon",
         link: '/'
    },
    {
        
        title: 'Inventory',
        icon: 'inventicon',
        link: '/inventory'
    },
    {
        title: 'Invoice',
        icon: 'invoiceicon',
        link: '/invoice'
    },
    {
        title: 'customers',
        icon: 'custicon',
        link: '/customerlog'
    }
];

</script>


<template>
    <div class="h-full w-56 px-4 py-8 flex flex-col bg-white shadow-lg ">
        <v-h2>Sidebar</v-h2>
        <div class="h-6"></div>
        <div class="flex flex-col">
            

            <ListTile v-for="item in data" :key="item.title" :title="item.title" :icon="item.icon" :link="item.link" />
        </div>
    </div>
</template>