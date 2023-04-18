<template>
    <button
        class="h-9 px-4 rounded-md bg-teal-600 hover:bg-teal-500 text-sm  text-white shadow-md hover:shadow-lg font-bold transition-all"
        v-bind="$attrs">
        <slot>Button</slot>
    </button>
</template>