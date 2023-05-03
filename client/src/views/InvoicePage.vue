<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import DataTable from '../components/DataTable.vue';
import { Invoice } from '../types';
import { Ref, ref } from 'vue';
import { getInvoices } from '../repository/app/warehouse/invoice'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'

const invoices: Ref<Invoice[]> = ref([]);
getInvoices().then((data) => {
    if (data) {
        invoices.value = data;
    }
});

const addInvoice = (): void => {

}

// Create a Bar Chart
ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);
const chartData = {
    labels: ['January', 'February', 'March'],
    datasets: [
        { data: [40, 20, 12], backgroundColor: ['#2ee59d', '#2ee59d', '#2ee59d'], label: 'Dataset 1' },
        { data: [50, 30, 22], backgroundColor: ['#FFCE56', '#FFCE56', '#FFCE56'], label: 'Dataset 2' }
    ]
};
const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart'
        }
    }
}

</script>


<template>
    <PageHeader>Invoice</PageHeader>

    <!-- Bar Chart example -->
    <!-- * Use `width` and `height` props to resize the Chart
        * Note: The Chart has fixed aspect ratio -->
    <Bar id="bar-chart-invoice" :options="chartOptions" :data="chartData" />
    
    <div class="h-8"></div>

    <data-table @click="addInvoice" :data-records="invoices" :headers="['id', 'customer', 'num products', 'created at']" />
</template>