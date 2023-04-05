<script>
import TutorialCard from "@/components/TutorialCard.vue";

export default {
    name: "TutorialZone",
    components: {TutorialCard}
}
</script>

<template>
    <tutorial-card title="Tutorial 1" img-path="./assets/logo.svg" description="Full Description category"/>
    <tutorial-card title="Tutorial 2" img-path="./assets/logo.svg" description="Full Description category"/>
    <tutorial-card title="Tutorial 3" img-path="./assets/logo.svg" description="Full Description category"/>
    <tutorial-card title="Tutorial 4" img-path="./assets/logo.svg" description="Full Description category"/>
</template>

<style scoped>

</style>