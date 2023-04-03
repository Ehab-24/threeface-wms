<script setup>

import ListTile from './ListTile.vue';
import VH2 from './VH2.vue';

const data = [
    {
        title: 'Home',
        icon: 'fa-user-secret',
        link: '/'
    },
    {
        title: 'Inventory',
        icon: 'fa-user-secret',
        link: '/inventory'
    },
    {
        title: 'Invoice',
        icon: 'fa-user-secret',
        link: '/invoice'
    }
];

</script>


<template>
    <div class="h-full w-56 px-4 py-8 flex flex-col bg-white shadow-lg">
        <v-h2>Sidebar</v-h2>
        <div class="h-6"></div>
        <div class="flex flex-col">
            <ListTile v-for="item in data" :key="item.title" :title="item.title" :icon="item.icon" :link="item.link" />
        </div>
    </div>
</template>