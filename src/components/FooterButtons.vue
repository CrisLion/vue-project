<template>
  <div class="sub-container">
      <pv-button :label="$t('save')" rounded class="my-class"/>
      <pv-button :label="$t('cancel')" rounded class="my-class"/>
  </div>
</template>

<script>
export default {
    name: "FooterButtons"
}
</script>

<style scoped>

.sub-container{
    display: grid;
    grid-template: "a b";
}

.my-class{
    display: block;
    margin-left: auto;
    margin-right: auto;
}

</style>