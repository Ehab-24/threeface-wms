<script setup lang="ts">

defineProps<{
    headers: string[],
    onClick: () => void
}>();

</script>

<template>
    <!-- This is a base component to assist concrete implementations of DataTable. Kind of like an abstract class -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th v-for="header in headers" :key="header" scope="col" class="px-6 py-3">
                        {{ header }}
                    </th>
                    <th>
                        <button class="px-2 text-3xl grid dark:bg-gray-300 bg-black bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-20 rounded-full transition-all ml-4"
                         @click = "onClick">+</button>
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                <slot name="body"></slot>
            </tbody>
        </table>
    </div>
</template>