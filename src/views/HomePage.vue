<script setup lang="ts">
import ibutton from '../components/ElevatedButton.vue';
import Card from '../components/Card.vue';
import MiniCard from '../components/MiniCard.vue';
import VH1 from '../components/VH1.vue';
import rectcard from '../components/RectCard.vue';
import card2 from '../components/Card2.vue';

</script>




<template >
<div class="flex flex-col ">

    <div class="h-16 flex px-8 flex  justify-between items-center border-b-2 dark:border-b-gray-900 bg-white dark:bg-gray-800 shadow-lg">

        <div class="flex items-center">
            <v-h1>HomePage</v-h1>
        </div>
        <div class="flex gap-5">
            <ibutton>Month to Date</ibutton><ibutton>Year to Date</ibutton><ibutton>Export</ibutton>
        </div>
    </div>

        <div class="h-4  "></div>
<div class="flex flex-row">
    <div class="md:w-8"></div>
        <card title="Sales Overview "  >
            <template #body>
             
                <div class="flex gap-20">
                    <div class="flex flex-col w-min">
                        <MiniCard title="Sale" icon="sale" :value=240 />
                        <div class="h-4"></div>
                        <MiniCard title="Cost" icon="cost" :value=1200 />
                        
                    </div>
                    <div class="flex flex-col w-max">
                        <MiniCard title="Revenue" icon="revenue" :value=1600 />
                        <div class="h-4"></div>
                        <MiniCard title="Profit" icon="profit" :value=400 />   
                    </div>
                </div>
            </template>
        </card>
        <div class="w-6"></div>
        <card title="Puchase Overview">
            <template #body>
                <div class="flex gap-20">
                    <div class="flex flex-col w-min">
                        <MiniCard title="Purchases" icon="purchase" :value=240 />
                        <div class="h-4"></div>
                        <MiniCard title="Cost" icon="cost" :value=1200 />
                        
                    </div>
                    <div class="flex flex-col w-max">
                        <MiniCard title="Cancel Order" icon="cancel" :value=1600 />
                        <div class="h-4"></div>
                        <MiniCard title="return" icon="return" :value=400 />  
                    </div>
                </div>
            </template>
        </card>
    </div>
    <div class="h-4"></div>
    <div class="flex flex-row gap-4">
        <div class="w-4"></div>
        
    <card title="Inventory Summary">
            <template #body>
                <div class="flex gap-5">
                    <div class="flex flex-col w-min">
                        <MiniCard title="Quantity In hand" icon="Qin" :value=240 />
                        <div class="h-4"></div>
                        <MiniCard title="Will be recieved" icon="reach" :value=1200 />
                        
                    </div>
                   
                </div>
            </template>
        </card>
        <card2 title="Product Details">
            <template #body>
                <div class="flex gap-5">
                    <div class="flex flex-col w-max ">
                        <rectcard content="Low stock items" :value=312  />
                       
                        <rectcard content="Item group" :value=1331 />
                        <rectcard content="No. of items" :value=16000 />
                        
                    </div>
                   
                </div>
            </template>
        </card2>
        <card title="No. of Users">
            <template #body>
                <div class="flex gap-5">
                    <div class="flex flex-col w-min">
                        <MiniCard title="Customers" icon="cust" :value=240 />
                        <div class="h-4"></div>
                        <MiniCard title="Suppliers" icon="supp" :value=1200 />
                        
                    </div>
                   
                </div>
            </template>
        </card>
    </div>
   
   
    <div class="h-4"></div>
</div>
</template>