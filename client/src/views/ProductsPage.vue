<script setup lang="ts">
import PageHeader from "../components/PageHeader.vue";
import BigCard from "../components/BigIconCard.vue";
import DataTable from "../components/DataTable.vue";


import { Pie, Line, PolarArea, Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, PointElement, LineElement, RadialLinearScale, ArcElement, CategoryScale, LinearScale } from 'chart.js'


// Create a Pie Chart
ChartJS.register(Title, Tooltip, ArcElement, PointElement, LineElement, RadialLinearScale, CategoryScale, LinearScale);
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    // Create random datasets
    { data: [40, 20, 12, 19, 24, 55, 107], backgroundColor: ['#2ee59d', '#2ee59d', '#2ee59d', '#2ee59d', '#2ee59d', '#2ee59d', '#2ee59d'], label: 'Dataset 1' },
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
      text: 'Charts'
    }
  }
}

 
</script>

<template>
  <PageHeader>Inventory</PageHeader>

  <div class="h-4"></div>
  <div class="w-full mb-12 grid  grid-flow-row-dense lg:grid-flow-col-dense  place-items-around gap-y-8">
    <Pie  height="300" width="300" id="pie-chart-customer" :options="chartOptions" :data="chartData" />

    

    <PolarArea id="polararea-chart-customer" height="300" width="300" :options="chartOptions" :data="chartData" />


   
  </div>

  <div class="grid grid-flow-row-dense place-content-stretch">
    <div class="mb-12 w-full grid grid-flow-col  gap-1">
      <div class="basis-1/4">
        <BigCard title="Total Products" :value="6700">
        <template #icon> 
          <svg class="h-8 w-8 text-teal-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />  <polyline points="7.5 19.79 7.5 14.6 3 12" />  <polyline points="21 12 16.5 14.6 16.5 19.79" />  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />  <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </template></BigCard>
      </div>
      <div class="basis-1/4">
        <BigCard title="In Stock Products" :value="12"><template #icon> 
          <svg class="h-8 w-8 text-green-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
</svg>

        </template></BigCard>
      </div>

      
    </div>
    <div class="mb-12 w-full grid grid-flow-col-dense gap-4">
      <div class="basis-1/4">
        <BigCard title="Out Stock Products" :value="3"><template #icon> 
          <svg class="h-8 w-8 text-red-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <path d="M10 12l4 4m0 -4l-4 4" />
          </svg>
        </template></BigCard>
      </div>
      <div class="basis-1/4">
        <BigCard title="Net Stock Value" :value="84260"><template #icon> 
          <svg class="h-8 w-8 text-yellow-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />  <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </template></BigCard>
      </div>

      
    </div>
   
  </div>

  <div class="mt-4 grid grid-flow-row-dense  w-max">
    <DataTable @click="" :headers="['id','warehouse','name' ,'price','quantity','createdAt']" :data-records="[]"/>
  </div>
</template>

