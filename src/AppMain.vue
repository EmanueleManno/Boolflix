<!-- Logica -->
<script>
import ItemsList from './components/Items/ItemsList.vue';
export default {
    components: { ItemsList }
};
</script>

<!-- Template -->
<template>
    <!-- Main -->
    <main>
        <h5>Made by Emanuele Manno</h5>
        <!--Container del main-->
        <section class="container">
            <!-- Lista delle serie e film -->
            <ItemsList></ItemsList>
        </section>

    </main>
</template>

<!-- Stile -->
<style lang="scss" scoped>
/*Stile firma*/
h5 {
    color: white;
    text-align: center;
    padding-top: 5px;
}
</style>