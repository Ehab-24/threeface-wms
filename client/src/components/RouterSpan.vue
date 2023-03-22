<template>
    <span class="underline underline-offset-2 text-orange-200 hover:text-white transition-all">
      <router-link :to="linkTo">
        <slot></slot>
      </router-link>
    </span>
</template>



<script>
export default {
    props: {
        linkTo: {
            type: String,
            required: true,
        },
    },
    setup() {},
}
</script>