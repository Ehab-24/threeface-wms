<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    setup() {
        
    },
}
</script>


<template>
    <li class="my-2 py-1 px-2 rounded-md bg-white bg-opacity-5 hover:bg-opacity-10 transition-all cursor-pointer">
        {{ project.id }} - {{ project.title }}
    </li>
</template>