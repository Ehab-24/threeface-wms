<script setup lang="ts">

import { computed, defineProps } from 'vue'
import saleicon from './SaleIcon.vue';
import revenueicon from './RevenueIcon.vue';
import profiticon from './ProfitIcon.vue';
import costicon from './CostIcon.vue';
import cancelicon from './CancelIcon.vue';
import returnicon from './ReturnIcon.vue';
import purchaseicon from './PurchaseIcon.vue';
import rocketicon from './RocketIcon.vue';
import Qinicon from './QinIcon.vue';
import custicon2 from './CustomerIcon2.vue';
import suppicon from './SupplierIcon.vue'; 
import VB1 from './VB1.vue';
import VD1 from './VD1.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
});

const val = computed(() => {
    return props.value > 999 ? (props.value / 1000).toFixed(1) + 'k' : props.value;
});

</script>


<template>
    <div class=" md:w-max md:h-min flex flex-row items-start shadow-sm bg-gray-200 dark:bg-gray-900 rounded-2xl p-5">

        <div   v-if="icon == 'sale'">
        <saleicon />
        </div>
        <div    v-if="icon == 'revenue'">
        <revenueicon/>
        </div>
        <div   v-if="icon == 'cost'">
        <costicon />
        </div>
        <div   v-if="icon == 'profit'">
        <profiticon />
        </div>
        <div   v-if="icon == 'cancel'">
        <cancelicon />
        </div>
        <div   v-if="icon == 'return'">
        <returnicon />
        </div>
        <div   v-if="icon == 'purchase'">
        <purchaseicon />
        </div>
        <div   v-if="icon == 'reach'">
        <rocketicon />
        </div>
        <div   v-if="icon == 'Qin'">
        <Qinicon />
        </div>
        <div   v-if="icon == 'cust'">
        <custicon2 />
        </div>
        <div   v-if="icon == 'supp'">
        <suppicon />
        </div>
        <div class="w-7"></div>
<div class="flex flex-col">
    <VB1 >{{ title }}</VB1>

        <v-d1>{{ val }}</v-d1>
</div>
       

    </div>
</template>