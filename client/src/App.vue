<script setup>
import ProjectList from "./components/ProjectList.vue"
import NavBar from "./components/NavBar.vue"

</script>

<template>
  <main class="h-screen px-12 bg-gradient-to-b from-slate-700 to-slate-900">
    <nav-bar />
    <body class="mt-12">
      <project-list />
    </body>
  </main>
</template>