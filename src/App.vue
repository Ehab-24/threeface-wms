<script setup>

import HomePage from './views/HomePage.vue';
import Titlebar from './components/Titlebar.vue';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <main class="h-screen bg-gray-200">
    <Titlebar />

  <div class="flex">

    <Sidebar />
    <router-view />
  </div>
  
  </main>
</template>