<script setup>

import ListTile from './ListTile.vue';

</script>




<template>
    
    <div class="h-full w-56 px-4 py-8 flex flex-col bg-white shadow-lg">
        <h2 class="text-lg font-bold">Sidebar</h2>

        <div class="h-6"></div>

        <div class="flex flex-col">

            <ListTile title="ListTile1" icon="fa-user-secret" link="/" />
            <ListTile title="ListTile2" icon="fa-user-secret" link="/" />
            <ListTile title="ListTile3" icon="fa-user-secret" link="/" />
            <ListTile title="ListTile4" icon="fa-user-secret" link="/" />
            <ListTile title="ListTile5" icon="fa-user-secret" link="/" />

        </div>
    </div>

</template>