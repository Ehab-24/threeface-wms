<script setup lang="ts">
import ElevatedButton from "../components/ElevatedButton.vue";
import VH1 from "../components/VH1.vue";
import { Router, useRouter } from "vue-router";
import Card from "../components/Card.vue";
import MiniCard from "../components/MiniCard.vue";
import BigCard from "../components/BigIconCard.vue";

const router: Router = useRouter();

const AddProduct = (): void => {
  router.push("/add-product");
};
</script>

<template>
  <v-h1>Inventory Page</v-h1>

  <div class="h-4"></div>

  <div class="flex flex-row">
    <div class="basis-1/4">
      <BigCard title="Total Products" :value="6700"></BigCard>
    </div>
    <div class="basis-1/4">
      <BigCard title="In Stock Products" :value="12"></BigCard>
    </div>
    <div class="basis-1/4">
      <BigCard title="Out of Stock Products" :value="3"></BigCard>
    </div>
    <div class="basis-1/4">
      <BigCard title="Net Stock Value" :value="84260"></BigCard>
    </div>
  </div>

  <div class="h-4"></div>
  <ElevatedButton @click="AddProduct"> Add Product </ElevatedButton>
</template>
