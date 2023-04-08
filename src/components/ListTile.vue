<script setup lang="ts">

import custicon from './CustomerIcon.vue';
import homeicon from './HomeIcon.vue';
import inventicon from './InventIcon.vue';
import invoiceicon from './InvoiceIcon.vue';
import { defineProps } from 'vue'

import VH3 from './VH3.vue'

defineProps  ({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

</script>



<template>

    <router-link :to='link'>

     <a href="#"  class="h-min px-4 py-2 my-1 flex rounded-lg 
     transition-all hover:text-green-900 hover:bg-green-300  ">
     
        
        <div   v-if="icon == 'custicon'">
        <custicon />
        </div>
        <div    v-if="icon == 'homeicon'">
        <homeicon />
        </div>
        <div   v-if="icon == 'inventicon'">
        <inventicon />
        </div>
        <div   v-if="icon == 'invoiceicon'">
        <invoiceicon />
        </div>
       
       <div class="w-7 "></div>
    

        <VH3>{{ title }}</VH3>
    </a>
    </router-link>
</template>