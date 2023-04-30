<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import DataTable from '../components/DataTable.vue';
import BigCard from "../components/BigIconCard.vue";


</script>

<template>
  <PageHeader>Suppliers</PageHeader>
  <div class="h-4"></div>

<div class="grid grid-flow-row-dense place-content-stretch">
  <div class="mb-12 w-full grid grid-flow-col-dense  gap-1">
    
    <div class="basis-1/4">
      <BigCard title="Total Suppliers" :value="6700">
        <template #icon>
            <svg class="h-8 w-8 text-teal-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
</svg>

    </template>
      </BigCard>
    </div>
    <div class="basis-1/4">
      <BigCard title="Active Suppliers" :value="12">
        <template #icon>
            <svg class="h-8 w-8 text-green-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg> 
    </template></BigCard>
    </div>

    
  </div>
  <div class="mb-12 w-full grid grid-flow-col-dense gap-4">
    <div class="basis-1/4">
      <BigCard title="Inactive Suppliers" :value="3"><template #icon>
        <svg class="h-8 w-8 text-red-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />  <path d="M9 17h6" />  <path d="M13 6h5l3 5v6h-2" /></svg> 
    </template></BigCard>
    </div>
    <div class="basis-1/4">
      <BigCard title="Net Activity" :value="8"><template #icon>
        <svg class="h-8 w-8 text-yellow-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />  <polyline points="17 6 23 6 23 12" /></svg>
  
    </template></BigCard>
    </div>

    
  </div>
 
</div>
  <div class="mt-4 grid grid-flow-row-dense  w-max">
  <DataTable @click="" :headers="['id','name','lastSupplied','createdAt','totalSupplies','totalSold','warehouse' ]" :data-records="[]" />
</div>
  

</template>