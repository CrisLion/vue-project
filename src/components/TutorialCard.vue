<script setup>
defineProps({
    description: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    imgPath:{
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <h1 class="green">{{ title }}</h1>
        <img alt="LogoTutorial" class="logo" src={{imgPath}} width="125" height="125" />
        <p> {{description}} </p>
    </div>
</template>


<style scoped>

</style>