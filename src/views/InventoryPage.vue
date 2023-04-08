<script setup lang="ts">


import ElevatedButton from '../components/ElevatedButton.vue';
import VH1 from '../components/VH1.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const AddProduct = () => {
  router.push('/add-product');
}

</script>



<template>
  <v-h1>Inventory Page</v-h1>
  <ElevatedButton @click="AddProduct">
      Add Product
  </ElevatedButton>
</template>