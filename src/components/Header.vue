<template>
  <header>
      <img alt="3 bars" src="" width="125" height="125" />
      <h1>{{$t('libraryUpc')}}</h1>
      <img alt="UserLogo" src="" width="125" height="125" />
  </header>
</template>

<script>
export default {
    name: "TheHeader"
}
</script>

<style scoped>

h1{
    text-align: center;
    padding-right: 130px;
    padding-left: 130px;
}
img{
    float: left;
    width: 20px;
    height: 20px;
}

</style>