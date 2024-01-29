<!-- Logica -->
<script>
import ItemCard from './ItemCard.vue';
import { store } from '../data/store';
export default {
    data() {
        return {
            store,
            movies: [],
            series: []
        };
    },
    components: { ItemCard }
};
</script>

<!-- Template -->
<template>
    <!-- Sezione dei film -->
    <section id="movies">
        <h3>
            <div class="fs-1 px-2 fa-beat">
                <FontAwesomeIcon :icon="['fas', 'video']" />
            </div> ----- Movies -----
        </h3>
        <!-- Contenitore dei film -->
        <div class="movie-container">

            <!-- Card-col dei film -->
            <div class="film-col d-flex justify-content-center align-items-center flex-wrap text-white">
                <ItemCard v-for="movie in store.movies" :key="movie.id" :item="movie"></ItemCard>
            </div>

        </div>
    </section>

    <!-- Sezione delle serie -->
    <section id="series">
        <h3>
            <div class="fs-1 px-2 fa-beat">
                <FontAwesomeIcon :icon="['fas', 'video']" />
            </div> ----- Series -----
        </h3>
        <!-- Contenitore delle serie -->
        <div class="series-container">
            <!-- Colonna delle serie -->
            <div class="series-col g-4 d-flex justify-content-center align-items-center flex-wrap text-white">
                <ItemCard v-for="serie in store.series" :key="serie.id" :item="serie"></ItemCard>
            </div>

        </div>
    </section>
</template>

<!-- Stile -->
<style lang="scss" scoped>
h3 {
    padding: 25px 0;
    font-size: 25px;
    text-align: center;
    color: yellow;
    font-weight: bold;
}

.movie-container,
.series-container {
    padding-bottom: 20px;
}
</style>