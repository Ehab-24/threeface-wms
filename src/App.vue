<script setup>
import NavBar from "./components/NavBar.vue"

</script>

<template>
  <main class="h-screen px-12 bg-gradient-to-b from-background1 to-background2">
    <nav-bar />
    <router-view />
  </main>
</template>