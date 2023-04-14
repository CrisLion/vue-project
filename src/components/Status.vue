<template>
  <div class="sub_container">
      <Label>{{$t('status')}}</Label>
      <div class="sub_sub_container">
          <pv-radio-button value="Active" />
          <label>{{$t('active')}}</label>
      </div>
      <div class="sub_sub_container">
          <pv-radio-button value="Suspended" />
          <label>{{$t('suspended')}}</label>
      </div>
      <div class="sub_sub_container">
          <pv-radio-button value="Inactive" />
          <label>{{$t('inactive')}}</label>
      </div>
  </div>
</template>

<script>
export default {
    name: "TheStatus",
}
</script>

<style scoped>
.sub_container{
    display: grid;
    grid-template: "a b c d";
    grid-gap: 30px
}
.sub_sub_container{
    display: grid;
    grid-template: "a b";
    grid-gap: 10px
}
</style>