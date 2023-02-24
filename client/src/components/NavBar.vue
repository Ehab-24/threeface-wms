<script setup>
</script>


<template>
    <nav class="h-16 flex items-center justify-between bg-transparent text-orange-200 font-bold">
        <!-- LOGO -->
        <!-- <p class="font-extrabold text-xl text-orange-200 cursor-pointer">Proj</p> -->
        
        <!-- Routes -->
        <div class="flex gap-12 items-center">
            <router-link to="/" class="hover:text-white cursor-pointer transition-all">Home</router-link>
            <router-link to="/projects" class="hover:text-white cursor-pointer transition-all">Projects</router-link>
            <router-link to="/dashboard" class="hover:text-white cursor-pointer transition-all">Dashboard</router-link>
        </div>

        <!-- Account Icon -->
        <router-link to="/account" class="w-10 h-10 rounded-full bg-white cursor-pointer"></router-link>
    </nav>
</template>