<script setup lang="ts">

import VH2 from './VH2.vue';

const user = {
    displayName: 'John Doe'
}

</script>


<template>
    <div class="py-4">
        <v-h2>{{ user.displayName }}</v-h2>
    </div>
</template>