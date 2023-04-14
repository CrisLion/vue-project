<template>
  <div class="sub_container">
      <Label :for="$t('dateAdded')" class="label-style">{{$t('dateAdded')}}</Label>
      <pv-calendar :id="$t('dateAdded')" v-model="date"/>
  </div>
</template>

<script setup>

import { ref } from "vue";

const date = ref(null);

</script>

<script>
export default {
    name: "TheDateAdded"
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