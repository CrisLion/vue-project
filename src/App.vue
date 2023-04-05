<script setup>
import TutorialZone from "@/components/Tutorial.vue";
import TheHeader from "@/components/Header.vue";
import TheFooter from "@/components/Footer.vue";
import TheCategory from "@/components/Category.vue";


</script>

<template>

    <div>
        <TheHeader />
        <div class="Sub-Container">
            <TheCategory />
            <TutorialZone />
        </div>
        <TheFooter />
    </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.Sub-Container{
    display: grid;
    grid-template: "a b"
                    "a b";
    grid-gap: 30px;
}

</style>
