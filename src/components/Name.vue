<template>
    <div class="sub_container">
        <Label class="label-style">Name :</Label>
        <pv-input-text placeholder="Product Name"/>
    </div>

</template>

<script>
export default {
    name: "TheName",
}
</script>

<style scoped>

.label-style{
    text-align: right;
}

.sub_container{
    display: grid;
    grid-template: "a b";
    grid-gap: 30px
}

</style>