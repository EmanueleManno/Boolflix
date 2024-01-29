<!-- Logica -->
<script>
import axios from 'axios';
import SearchForm from './SearchForm.vue';
import { store } from './components/data/store';
import { api } from './components/data';
export default {
    components: { SearchForm },
    data() {
        return {
            store,
            titleFilter: ''
        }
    },
    methods: {
        setTitleFilter(term) {
            this.titleFilter = term;
        },
        searchMovie() {
            if (!this.titleFilter) {
                store.movies = [];
                store.series = [];
                return;
            };

            const { key, baseUri } = api;

            const axiosConfig = {
                params: {
                    api_key: key,
                    query: this.titleFilter
                }
            }

            axios.get(`${baseUri}/search/movie`, axiosConfig)
                .then(res => {
                    store.movies = res.data.results;
                });

            axios.get(`${baseUri}/search/tv`, axiosConfig)
                .then(res => {
                    store.series = res.data.results;
                });
        }
    }
};
</script>

<!-- Template -->
<template>
    <header>
        <!-- Icona -->
        <div class="fs-1 px-2 fa-beat icon-style">
            <FontAwesomeIcon :icon="['fas', 'video']" />
        </div>
        <!-- Titolo -->
        <h1>BOOLFLIX</h1>
        <h2>Films and TV Series</h2>
        <!--Barra di ricerca-->
        <span>
            <SearchForm @term-change="setTitleFilter" @form-submit="searchMovie"></SearchForm>
        </span>
        <!-- Icona  -->
        <div class="fs-1 px-2 fa-beat icon-style">
            <FontAwesomeIcon :icon="['fas', 'video']" />
        </div>
    </header>
</template>

<!-- Stile -->
<style lang="scss" scoped></style>