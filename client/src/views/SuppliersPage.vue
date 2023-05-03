<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import DataTable from '../components/DataTable.vue';
import BigCard from "../components/BigIconCard.vue";
import { Ref, ref } from 'vue';
import * as supplierRepository from '../repository/app/warehouse/supplier'

import { Pie, Line, PolarArea, Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, PointElement, LineElement, RadialLinearScale, ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { Supplier } from '../types';
import AddSupplierForm from '../components/AddSupplierForm.vue';
import Modal from '../components/Modal.vue';


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

// Get Suppliers
const suppliers: Ref<Supplier[]> = ref([]);
supplierRepository.getAll(10, 1).then((data) => {
  if (data) {
    suppliers.value = data;
  }
});

const modalRef: Ref<any | null> = ref(null);
function openModal(): void {
  modalRef.value?.openModal();
}


</script>

<template>
  <PageHeader>Suppliers</PageHeader>

  <div class="h-4"></div>

  <div class="w-full mb-12 grid  grid-flow-row-dense lg:grid-flow-col-dense  place-items-around gap-y-8">
    <Pie height="300" width="300" id="pie-chart-customer" :options="chartOptions" :data="chartData" />
    <PolarArea id="polararea-chart-customer" height="300" width="300" :options="chartOptions" :data="chartData" />
  </div>


  <div class="grid grid-flow-row-dense place-content-stretch">
    <div class="mb-12 w-full grid grid-flow-col-dense  gap-1">

      <div class="basis-1/4">
        <BigCard title="Total Suppliers" :value="6700">
          <template #icon>
            <svg class="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </template>
        </BigCard>
      </div>
      <div class="basis-1/4">
        <BigCard title="Active Suppliers" :value="12">
          <template #icon>
            <svg class="h-8 w-8 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <polyline points="17 11 19 13 23 9" />
            </svg>
          </template>
        </BigCard>
      </div>


    </div>
    <div class="mb-12 w-full grid grid-flow-col-dense gap-4">
      <div class="basis-1/4">
        <BigCard title="Inactive Suppliers" :value="3"><template #icon>
            <svg class="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="18" y1="8" x2="23" y2="13" />
              <line x1="23" y1="8" x2="18" y2="13" />
            </svg>
          </template></BigCard>
      </div>
      <div class="basis-1/4">
        <BigCard title="Net Activity" :value="8"><template #icon>
            <svg class="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

          </template></BigCard>
      </div>
    </div>
  </div>

  <div class="mt-4 grid grid-flow-row-dense w-full">
    <DataTable @click="openModal"
      :headers="['name', 'Last Supply', 'Total Supplies', 'total Sold', 'created at']"
      :data-records="suppliers" />
  </div>

  <Modal ref="modalRef">
    <AddSupplierForm @add-supplier="(supplier: Supplier) => suppliers.push(supplier)" />
  </Modal>
</template>