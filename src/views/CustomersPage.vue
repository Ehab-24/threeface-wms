<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import CustomerTable from '../components/CustomerTable.vue';
import ElevatedButton from "../components/ElevatedButton.vue";
import { Router, useRouter } from "vue-router";
const router: Router = useRouter();

const pushAddCustomerPage = (): void => {
    router.push("/add-customer");
};
</script>

<template>
      
  <PageHeader >Customers</PageHeader>

<ElevatedButton @click="pushAddCustomerPage"> Add Customer </ElevatedButton>
       <CustomerTable />

</template>