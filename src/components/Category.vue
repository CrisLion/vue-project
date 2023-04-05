<template>
  <div class="Container" >
      <CategoryCard title="Category 1"/>
      <CategoryCard title="Category 2"/>
      <CategoryCard title="Category 3"/>
      <CategoryCard title="Category 4"/>
  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";

export default {
    name: "TheCategory",
    components: {CategoryCard}
}
</script>

<style scoped>
.Container{
    display: grid;
    grid-template: "a"
                    ;
    grid-gap: 30px;
}

</style>