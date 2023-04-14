<template>
  <div class="sub-container">

      <Label :for="$t('description')">{{$t('description')}}</Label>
      <pv-text-area :id="$t('description')" autoResize rows="5" cols="30"/>

  </div>

    <div class="sub-container">
        <pv-checkbox :id="$t('digitalVersion')" value="Cheese" class="my-class"/>
        <div>
            <label :for="$t('digitalVersion')" class="my-class">{{$t('digitalVersion')}}</label>
        </div>
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