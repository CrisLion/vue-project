<template>
  <div>
      <pv-panel header="Add Tutorial" toggleable>
          <div>
              <TheCode/>
              <TheQuantity/>
              <TheDateAdded/>
          </div>
      </pv-panel>
  </div>
</template>

<script>
import TheCode from "@/components/Code.vue";
import TheDateAdded from "@/components/DateAdded.vue";
import TheQuantity from "@/components/Quantity.vue";

export default {
    name: "AddTutorial",
    components: {TheQuantity, TheDateAdded, TheCode},
}
</script>

<style scoped>

</style>