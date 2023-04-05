<script>
import TutorialCard from "@/components/TutorialCard.vue";

export default {
    name: "TutorialZone",
    components: {TutorialCard}
}
</script>

<template>
    <div class="container-Grid">
        <tutorial-card title="Tutorial 1" img-path="./assets/logo.svg" description="Full Description category"/>
        <tutorial-card title="Tutorial 2" img-path="./assets/logo.svg" description="Full Description category"/>
        <tutorial-card title="Tutorial 3" img-path="./assets/logo.svg" description="Full Description category"/>
        <tutorial-card title="Tutorial 4" img-path="./assets/logo.svg" description="Full Description category"/>
    </div>

</template>

<style scoped>

.container-Grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
}

</style>