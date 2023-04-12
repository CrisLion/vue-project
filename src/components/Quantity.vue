<template>
  <div class="sub_container">
      <Label class="label-style">Quantity :</Label>
      <pv-input-number />
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