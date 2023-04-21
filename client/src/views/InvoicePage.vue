<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import DataTable from '../components/DataTable.vue';
import { Invoice } from '../types';
import { Ref, ref } from 'vue';
import { getInvoices } from '../repository/app/warehouse/invoice'

const invoices: Ref<Invoice[]> = ref([]);
getInvoices().then((data) => {
    if (data) {
        invoices.value = data;
    }
});

const addInvoice = (): void => {

}

</script>

<template>
    <PageHeader>Invoice</PageHeader>
    <data-table @click="addInvoice" :data-records="invoices" :headers="['id', 'customer', 'num products', 'created at']" />
</template>