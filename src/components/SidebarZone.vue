<script setup>
import CategoryCard from "@/components/CategoryCard.vue";
</script>

<template>
  <v-app>
  <h1>Categories</h1>
  <v-navigation-drawer app v-model = "drawer">
    <category-card title="Category 1" img-path="./assets/logo.svg" description="Full Description category"/>
    <category-card title="Category 2" img-path="./assets/logo.svg" description="Full Description category"/>
    <category-card title="Category 1" img-path="./assets/logo.svg" description="Full Description category"/>
    <category-card title="Category 3" img-path="./assets/logo.svg" description="Full Description category"/>
  </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "SidebarZone",
  data(){
    return{
      drawer: true
    };
  }
};
</script>

<style scoped>
</style>