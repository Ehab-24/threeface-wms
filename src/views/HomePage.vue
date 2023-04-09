<script setup lang="ts">
import ibutton from '../components/ElevatedButton.vue';
import Card from '../components/Card.vue';
import MiniCard from '../components/MiniCard.vue';
import VH1 from '../components/VH1.vue';
import rectcard from '../components/RectCard.vue';
import card2 from '../components/Card2.vue';
import PageHeader from '../components/PageHeader.vue';



</script>




<template>
    <div class="flex flex-col">

        <PageHeader>Home</PageHeader>

        <div class="flex flex-row">
            <card title="Sales Overview ">
                <template #body>

                    <div class="flex gap-20">
                        <div class="flex flex-col w-min">
                            <MiniCard title="Sale" :value=240>
                                <template #icon>
                                    <svg class="h-8 w-8 py-1 px-1 bg-opacity-6 bg-blue-300 text-white rounded-lg"
                                        viewBox="0 0 24 24" fill="blue" fill-opacity="1" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <path d="M16 10a4 4 0 0 1-8 0" />
                                    </svg>
                                </template>
                            </MiniCard>
                            <div class="h-4"></div>
                            <MiniCard title="Cost" :value=1200>
                                <template #icon>
                                    <svg class="h-8 w-8 py-1 px-1 bg-red-300 bg-opacity-6 text-white rounded-lg" fill="red"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </template>
                            </MiniCard>

                        </div>
                        <div class="flex flex-col w-max">
                            <MiniCard title="Revenue" :value=1600>
                                <template #icon>
                                    <svg class="h-8 w-8 text-white bg-opacity-6 bg-yellow-200 py-0.7 px-0.7 fill-yellow-500 rounded-lg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </template>
                            </MiniCard>
                            <div class="h-4"></div>
                            <MiniCard title="Profit" :value=400>
                                <template #icon>
                                    <svg class="h-8 w-8 py-1 px-1 bg-opacity-6 bg-green-100 text-green-500 rounded-lg"
                                        viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                        <polyline points="17 6 23 6 23 12" />
                                    </svg>
                                </template>
                            </MiniCard>
                        </div>
                    </div>
                </template>
            </card>
            <div class="w-6"></div>
            <card title="Puchase Overview">
                <template #body>
                    <div class="flex gap-20">
                        <div class="flex flex-col w-min">
                            <MiniCard title="Purchases" :value=240>
                                <template #icon>
                                    <svg class="h-8 w-8 text-white bg-opacity-6 bg-purple-200 py-0.8 px-0.8 fill-purple-500 rounded-lg "
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </template>
                            </MiniCard>
                            <div class="h-4"></div>
                            <MiniCard title="Cost" :value=1200>
                                <template #icon>
                                    <svg class="h-8 w-8 py-1 px-1 bg-red-300 bg-opacity-6 text-white rounded-lg" fill="red"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </template>
                            </MiniCard>

                        </div>
                        <div class="flex flex-col w-max">
                            <MiniCard title="Cancel Order" :value=1600>
                                <template #icon>
                                    <svg class="h-8 w-8 text-white bg-opacity-6 bg-red-200 py-1 px-1 fill-red-500 rounded-lg "
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <polygon
                                            points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                                        <line x1="15" y1="9" x2="9" y2="15" />
                                        <line x1="9" y1="9" x2="15" y2="15" />
                                    </svg>
                                </template>
                            </MiniCard>
                            <div class="h-4"></div>
                            <MiniCard title="return" :value=400>
                                <template #icon>
                                    <svg class="h-8 w-8 text-white bg-opacity-6 bg-violet-200 py-1.5 px-1.5 fill-violet-500 rounded-lg"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx="7" cy="17" r="2" />
                                        <circle cx="17" cy="17" r="2" />
                                        <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />
                                        <path d="M9 17h6" />
                                        <path d="M13 6h5l3 5v6h-2" />
                                    </svg>
                                </template>
                            </MiniCard>
                        </div>
                    </div>
                </template>
            </card>
        </div>
        <div class="h-4"></div>
        <div class="flex flex-row gap-4">

            <card title="Inventory Summary">
                <template #body>
                    <div class="flex gap-5">
                        <div class="flex flex-col w-min">
                            <MiniCard title="Quantity In hand" :value=240>

                                <template #icon>
                                    <svg class="h-8 w-8  text-white bg-opacity-6 bg-green-200 py-0.9 px-0.9 fill-green-500 rounded-lg"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                                        <polyline points="7.5 19.79 7.5 14.6 3 12" />
                                        <polyline points="21 12 16.5 14.6 16.5 19.79" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line x1="12" y1="22.08" x2="12" y2="12" />
                                    </svg>
                                </template>
                            </MiniCard>
                            <div class="h-4"></div>
                            <MiniCard title="Will be recieved" :value=1200>
                                <template #icon>
                                    <svg class="h-8 w-8 text-white bg-opacity-6 bg-red-200 py-1.5 px-1.5 fill-red-600 rounded-lg"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                                        <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                                        <circle cx="15" cy="9" r="1" />
                                    </svg>
                                </template>
                            </MiniCard>
                        </div>
                    </div>
                </template>
            </card>
            <card2 title="Product Details">
                <template #body>
                    <div class="flex gap-5">
                        <div class="flex flex-col w-max ">
                            <rectcard content="Low stock items" :value=312 />
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
                            <MiniCard title="Customers" :value=240>
                                <template #icon>
                                    <svg class="h-8 w-8 text-white bg-opacity-6 bg-green-200 py-1 px-1 fill-green-500 rounded-lg"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                    </svg>
                                </template>
                            </MiniCard>
                            <div class="h-4"></div>
                            <MiniCard title="Suppliers" :value=1200>
                                <template #icon>
                                    <svg class="h-8 w-8 text-white bg-opacity-6 bg-blue-200 py-0.8 px-10.8 fill-blue-500 rounded-lg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </template>
                            </MiniCard>
                        </div>
                    </div>
                </template>
            </card>
        </div>
    </div>
</template>