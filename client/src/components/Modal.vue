<script setup lang="ts">

import { Ref, ref } from 'vue';

defineExpose({
    openModal
});

const modalRef: Ref<HTMLDialogElement | null> = ref(null);
function openModal(): void {
    modalRef.value?.showModal();
}
function closeModal(): void {
    modalRef.value?.close();
}

</script>

<template>
    <dialog ref="modalRef" class="px-8 rounded-lg shadow-lg backdrop:bg-slate-900 backdrop:opacity-30">
        <header class="font-extrabold text-slate-800 dark:text-slate-200 flex justify-end">
            <button @click="closeModal" class="w-8 h-8 bg-black dark:bg-white bg-opacity-0 hover:bg-opacity-20 rounded-full transition-all">X</button>
        </header>
        <slot></slot>
    </dialog>
</template>