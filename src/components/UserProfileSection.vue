<script setup>

import VH2 from './VH2.vue';
import { getUserState } from '../repository/authentication';

const user = await getUserState();

</script>


<template>
    <div class="py-4">
        <v-h2>{{ user.displayName }}</v-h2>
    </div>
</template>