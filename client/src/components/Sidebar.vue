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

        title: 'Customers',
        link: '/customers'
    }
];

</script>


<template>
    <div class="min-h-full w-56 px-4 py-8 flex flex-col border-r-2 border-gray-300 dark:border-gray-800">

        <v-h2 class="text-gray-500 dark:text-gray-400">Sidebar</v-h2>
        <div class="h-6"></div>
        <div class="flex flex-col">


            <ListTile title="Home" link="/">
                <template #icon>
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </template>
            </ListTile>
            <ListTile title="Inventory" link="/inventory">
                <template #icon>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </template>
            </ListTile>
            <ListTile title="Invoice" link="/invoice">
                <template #icon>
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <line x1="9" y1="7" x2="10" y2="7" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="13" y1="17" x2="15" y2="17" />
                </template>
            </ListTile>
            <ListTile title="Customers" link="/customers">
                <template #icon>
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 11l2 2l4 -4" />
                </template>
            </ListTile>
        </div>
    </div>
</template>