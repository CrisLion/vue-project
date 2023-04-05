<template>
  <div class = "footerItem">
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

.footerItem{
    padding-top: 50px;
}

</style>