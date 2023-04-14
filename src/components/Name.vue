<template>
    <div class="sub_container">
        <Label :for="$t('productName')" class="label-style">{{$t('name')}}</Label>
        <pv-input-text :id="$t('productName')" :placeholder="$t('productName')"/>
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