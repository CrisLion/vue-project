<template>
  <div class="sub_container">
      <Label :for="$t('quantity')" class="label-style">{{$t('quantity')}}</Label>
      <pv-input-number :id="$t('quantity')" />
  </div>
</template>

<script>
export default {
    name: "TheQuantity",
}
</script>

<style scoped>
.sub_container{
    display: grid;
    grid-template: "a b";
    grid-gap: 30px
}

.label-style{
    text-align: right;
}



</style>