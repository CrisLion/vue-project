<template>
  <div class="sub_container">
      <Label class="label-style">{{$t('code')}}</Label>
      <pv-input-mask mask="999-9999" placeholder="999-9999" />
      <pv-button :label="$t('validate')" rounded class="my-class"/>
  </div>
</template>

<script>
export default {
    name: "TheCode",
}
</script>

<style scoped>
.sub_container{
    display: grid;
    grid-template: "a b c";
    grid-gap: 30px;
}

.label-style{
    text-align: right;
}

</style>