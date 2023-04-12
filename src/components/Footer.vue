<template>
    <footer>
        <div class="container">
            <FooterItem info="venta@librery.com" />
            <FooterItem info="981622558 " />
            <FooterItem info="Los Manzanos 398" />
        </div>
    </footer>
</template>

<script>
import FooterItem from "@/components/FooterItem.vue";

export default {
    name: "TheFooter",
    components: {FooterItem}
}

</script>

<style scoped>
.container{
    display: grid;
    grid-template: "a b c";
    grid-gap: 100px;
}
</style>