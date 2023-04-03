<script setup>
import Card from '../components/Card.vue';
import MiniCard from '../components/MiniCard.vue';
import VH1 from '../components/VH1.vue';
</script>




<template>
    <div class="flex flex-col">

        <v-h1>Home Page</v-h1>

        <Card title="Card">
            <template #body>
                <div class="flex gap-4">

                    <MiniCard title="MiniCard 1" icon="fa-user-secret" :value=240 />

                    <MiniCard title="MiniCard 2" icon="fa-user-secret" :value=1600 />

                </div>
            </template>
        </Card>
    </div>
</template>