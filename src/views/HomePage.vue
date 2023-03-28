<script setup>
    import Card from '../components/Card.vue';
    import MiniCard from '../components/MiniCard.vue';
</script>




<template>
    <div class="flex flex-col">

    <h1 class="py-8 text-xl font-bold">Home Page</h1>

        <Card title="Card">
            <template v-slot:body>
                
                <div class="flex gap-4">

                    <MiniCard title="MiniCard 1" icon="fa-user-secret" value="240" />

                    <MiniCard title="MiniCard 2" icon="fa-user-secret" value="1600" />

                </div>

            </template>
        </Card>


    </div>

</template>