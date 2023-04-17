<script setup lang = "ts">

import CustomerForm from './AddCustomerForm.vue';
import VH1 from './VH1.vue';

</script>


<template>
    <VH1>Add Customer</VH1>
    <Suspense>
        <CustomerForm/>
    </Suspense>

</template>