<template>
  <div class="sub_container">
      <Label>Status :</Label>
      <div class="sub_sub_container">
          <pv-radio-button value="Active" />
          <label>Active</label>
      </div>
      <div class="sub_sub_container">
          <pv-radio-button value="Suspended" />
          <label>Suspended</label>
      </div>
      <div class="sub_sub_container">
          <pv-radio-button value="Inactive" />
          <label>Inactive</label>
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