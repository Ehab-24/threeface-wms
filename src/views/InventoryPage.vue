<script setup lang="ts">
import ElevatedButton from "../components/ElevatedButton.vue";
import VH1 from "../components/VH1.vue";
import { Router, useRouter } from "vue-router";
import BigCard from "../components/BigIconCard.vue";
import ProductsTable from "../components/ProductsTable.vue";
import { getUserState } from "../repository/authentication";
// import {getProduct} from "../repository/db/product";
// import { Product } from "../types/Product";

// const user: any = await getUserState();
// const products:Product[] = await getProduct(user.uid)

const router: Router = useRouter();

const AddProduct = (): void => {
  router.push("/add-product");
};

// const calculatetotal = (products:Product[]): number => {
//   let total = 0;
//   products.forEach((product: Product) => {
//     total += product.price * product.quantity;
//   });
//   return total;
// };

// const total = calculatetotal(products);
// </script>

<template>
  <v-h1>Inventory Page</v-h1>

  <div class="h-4"></div>

  <div class="flex flex-row">
    <div class="basis-1/4">
      <BigCard title="Total Products" :value=6700></BigCard>
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
  <Suspense>
    <ProductsTable/>
  </Suspense>
  <div class="h-4"></div>
  <ElevatedButton @click="AddProduct"> Add Product </ElevatedButton>
</template>
