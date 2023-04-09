<script setup lang="ts">

defineProps<{
    headers: string[],
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
                </tr>
            </thead>
            <tbody>
                <slot name="body"></slot>
            </tbody>
        </table>
    </div>
</template>