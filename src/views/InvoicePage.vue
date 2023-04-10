<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import VH1 from '../components/VH1.vue';
import InvoiceTable from '../components/InvoiceTable.vue';
import { Invoice } from '@/types';
import { Ref, ref } from 'vue';

const invoices: Ref<Invoice[]> = ref([]);

</script>

<template>
     <PageHeader >Invoice</PageHeader>


    <invoice-table />

</template>