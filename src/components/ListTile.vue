<script setup lang="ts">
import custicon from './customericon.vue';
import homeicon from './homeicon.vue';
import inventicon from './inventicon.vue';
import invoiceicon from './invoiceicon.vue';
import { defineProps } from 'vue'

import VH3 from './VH3.vue'

const props = defineProps({
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
    <router-link :to='link' class="h-min px-4 py-2 my-1 flex rounded-lg    transition-all hover:bg-green-100 hover:text-green-700">
     
     
        
        <div   v-if="props.icon == 'custicon'">
        <custicon />
        </div>
        <div    v-if="props.icon=='homeicon'">
        <homeicon />
        </div>
        <div   v-if="props.icon=='inventicon'">
        <inventicon />
        </div>
        <div   v-if="props.icon=='invoiceicon'">
        <invoiceicon />
        </div>
       
       <div class="w-7 "></div>
        

        <v-h3   >{{ title }}</v-h3>
    

    </router-link>
</template>