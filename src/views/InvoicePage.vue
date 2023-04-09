<script setup lang="ts">

import VH1 from '../components/VH1.vue';
import InvoiceTable from '../components/InvoiceTable.vue';
import { Invoice } from '@/types';
import { Ref, ref } from 'vue';

const invoices: Ref<Invoice[]> = ref([]);

</script>

<template>
    <v-h1>Invoice Page</v-h1>

    <invoice-table />
</template>