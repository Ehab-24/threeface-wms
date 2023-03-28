<script setup>

import HomePage from './views/HomePage.vue';
import Titlebar from './components/Titlebar.vue';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <main class="h-screen bg-gray-200">
    <!-- <router-view /> -->
    <Titlebar />

    <div class="flex">
    
      <Sidebar />

      <div class="w-16"></div>

      <HomePage />
    
    </div>

  </main>
</template>