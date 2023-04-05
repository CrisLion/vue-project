<template>
  <div>
      <img alt="FooterItemLogo" src="" width="125" height="125" />
      <p>{{info}}</p>
  </div>
</template>

<script setup>

defineProps({
    info: {
        type: String,
        required: true
    },
})

</script>

<style scoped>
</style>