<script setup lang = "ts">

import ProductForm from '../components/AddProductForm.vue';
import VH1 from '../components/VH1.vue';

</script>


<template>
    <VH1>Add Product</VH1>
    <Suspense>
        <ProductForm/>
    </Suspense>

</template>