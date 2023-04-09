<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import VH1 from '../components/VH1.vue';
import CustomerTable from '../components/CustomerTable.vue';
import ElevatedButton from "../components/ElevatedButton.vue";
import { Router, useRouter } from "vue-router";
const router: Router = useRouter();

const pushAddCustomerPage = (): void => {
    router.push("/add-customer");
};
</script>

<template>
   

           
  <PageHeader  title="Customers"></PageHeader>


       <CustomerTable />

<div class="mb-12 flex flex-row gap-5">
    <div class="w-7"></div>
        <ElevatedButton @click="pushAddCustomerPage"> Add Customer </ElevatedButton>
    
    </div>
</template>