<script setup>
defineProps({
    title:{
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <h1 class="green">{{ title }}</h1>
        <p> This section has description of </p>
    </div>
</template>


<style scoped>

</style>