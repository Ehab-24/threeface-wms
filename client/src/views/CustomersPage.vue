<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import DataTable from '../components/DataTable.vue';
import { Pie, Line, PolarArea, Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, PointElement, LineElement, RadialLinearScale, ArcElement, CategoryScale, LinearScale } from 'chart.js'

// Create a Pie Chart
ChartJS.register(Title, Tooltip, ArcElement, PointElement, LineElement, RadialLinearScale, CategoryScale, LinearScale);
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    // Create random datasets
    { data: [40, 20, 12, 19, 24, 55, 107], backgroundColor: ['#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB', '#36A2EB'], label: 'Dataset 1' },
    { data: [50, 30, 22, 8, 42, 36, 88], backgroundColor: ['#FFCE56', '#FFCE56', '#FFCE56', '#FFCE56', '#FFCE56', '#FFCE56', '#FFCE56'], label: 'Dataset 2' }
  ]
};
const chartOptions = {
  responsive: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Chart.js Charts'
    }
  }
}
</script>

<template>
  <PageHeader>Customers</PageHeader>


  <!-- Chart examples -->
  <!-- * Use `width` and `height` props to resize the Chart
        * Note: The Chart has fixed aspect ratio -->
  <div class="w-full mb-12 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 place-items-center gap-y-8">
    <Pie height="400" width="400" id="pie-chart-customer" :options="chartOptions" :data="chartData" />

    <Line id="line-chart-customer" height="400" width="400" :options="chartOptions" :data="chartData" />

    <PolarArea id="polararea-chart-customer" height="400" width="400" :options="chartOptions" :data="chartData" />

    <Radar id="radar-chart-customer" height="400" width="400" :options="chartOptions" :data="chartData" />
  </div>

  <DataTable @click="" :headers="[]" :data-records="[]" />
</template>