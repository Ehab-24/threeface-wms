<script setup>

import ElevatedButton from '../components/ElevatedButton.vue';
import VH1 from '../components/VH1.vue';
import handleSignout from '../composables/auth/handleSignout';
import { useRouter } from 'vue-router';

const router = useRouter();
const onSignout = () => handleSignout(router);

</script>


<template>
    <v-h1>Profile Page</v-h1>
    <div class="h-4"></div>
    <elevated-button @click="onSignout">Sign out</elevated-button>
</template>