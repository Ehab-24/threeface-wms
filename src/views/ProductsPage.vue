<script setup lang="ts">
import PageHeader from "../components/PageHeader.vue";
import ElevatedButton from "../components/ElevatedButton.vue";
import { Router, useRouter } from "vue-router";
import BigCard from "../components/BigIconCard.vue";
import ProductsTable from "../components/ProductsTable.vue";

const router: Router = useRouter();

const pushAddProductPage = (): void => {
  router.push("/add-product");
};
</script>

<template>
  <PageHeader>Inventory</PageHeader>

  <div class="h-4"></div>

  <div class="flex flex-col items-start">
    <div class="mb-12 flex flex-row gap-4">
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

    <elevated-button @click="pushAddProductPage"> Add Product </elevated-button>
  </div>

  <div class="mt-4">
    <ProductsTable />
  </div>
</template>
