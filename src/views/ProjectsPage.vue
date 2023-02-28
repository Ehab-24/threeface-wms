<template>
    <div class="w-full md:w-2/3 mt-8">
        <h1 class="text-lg text-gray-400 font-extrabold tracking-wide">Projects</h1>
        <project-list />
    </div>
</template>


<script>

import ProjectList from "../components/ProjectList.vue";

export default {
    name: "projects",
    components: {
        ProjectList,
    },
    setup() {
        
    },
}
</script>
