<template>
  <div>
      <pv-panel header="Add Tutorial" toggleable>
          <div>
              <TheCode/>
              <TheName/>
              <TheQuantity/>
              <TheDateAdded/>
              <TheDescription/>
              <TheStatus/>
              <FooterButtons/>
          </div>
      </pv-panel>
  </div>
</template>

<script>
import TheCode from "@/components/Code.vue";
import TheDateAdded from "@/components/DateAdded.vue";
import TheQuantity from "@/components/Quantity.vue";
import TheStatus from "@/components/Status.vue";
import TheName from "@/components/Name.vue";
import FooterButtons from "@/components/FooterButtons.vue";
import TheDescription from "@/components/Description.vue";


export default {
    name: "AddTutorial",
    components: {TheDescription, FooterButtons, TheName, TheStatus, TheQuantity, TheDateAdded, TheCode},
}
</script>

<style scoped>

</style>