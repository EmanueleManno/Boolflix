<!-- Logica -->
<script>
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
export default {
    components: { AppHeader, AppMain }
};
</script>

<!-- Template -->
<template>
    <!-- Header -->
    <AppHeader></AppHeader>

    <!-- Main -->
    <AppMain></AppMain>
</template>

<!-- Stile -->
<style lang="scss">
/* Importazione del foglio di stile scss */
@use './assets/scss/style.scss'
</style>