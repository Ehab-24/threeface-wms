<template>
    <div class="w-max mt-4 py-2 px-4 flex border-2 border-red-500 rounded-md text-md text-gray-200">
        <div class="text-red-500 font-bold">
            Error! &nbsp;
        </div>
        {{ message }}
    </div>
</template>


<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },  
    },
    setup(props) {
        console.log(props.message)
        return {
            message: props.message,
        };
    },

}
</script>