<script setup>
</script>


<template>
    <nav class="h-16 flex items-center justify-between bg-transparent text-orange-200 font-bold">
        <p class="font-extrabold text-xl text-orange-200 cursor-pointer">Proj</p>
        <ul class="flex gap-12 items-center">
            <li>
                <router-link to="/" class="cursor-pointer">Home</router-link>
            </li>
            <li>
                <router-link to="/" class="cursor-pointer">Dashboard</router-link>
            </li>
        </ul>
        <router-link to="/" class="w-10 h-10 rounded-full bg-white cursor-pointer"></router-link>
    </nav>
</template>