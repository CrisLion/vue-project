<template>
  <div class="sub-container">

      <Label>Description :</Label>
      <pv-text-area autoResize rows="5" cols="30"/>

  </div>

    <div class="sub-container">
        <pv-checkbox value="Cheese" class="my-class"/>
        <label class="my-class">Digital version</label>
    </div>

</template>

<script>
export default {
    name: "TheDescription",
}
</script>

<style scoped>

.sub-container{
    display: grid;
    grid-template: "a b";
    grid-gap: 30px
}

.my-class{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>