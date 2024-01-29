<!-- Logica -->

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
<script>
export default {
    props: {
        item: Object
    },
    computed: {
        hasFlag() {
            const availableFlags = ["it", "en", "fr", "es"];
            return availableFlags.includes(this.item.original_language);
        },
        flagSrc() {
            const url = new URL(`/public/img/${this.item.original_language}.png`, import.meta.url);
            return url.href;
        },
        vote() {
            return Math.ceil(this.item.vote_average / 2);
        },
    },
    methods: {
        iconClass(n) {
            return n <= this.vote ? "fas" : "far";
        }
    },
};
</script>

<!-- Template -->
<template>
    <!--Card del film o della serie-->
    <div class="movie-card text-center d-flex justify-content-center align-items-center flex-column">
        <!-- TITOLO O NOME -->
        <h4>{{ item.title || item.name }}</h4>
        <!-- IMMAGINE DI LOCANDINA -->
        <img v-if="item.poster_path" :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
            :alt="item.original_title || item.original_name">
        <img v-else :src="`./img/nophoto.jpg`">
        <!-- NOME ORIGINALE -->
        <div class="original-title-name">{{ item.original_title || item.original_name }}</div>
        <!-- VOTO -->
        <div class="vote-average">
            <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[iconClass(n), 'star']" />
        </div>
        <!-- LINGUA-->
        <div class="original-language">
            <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
            <span v-else>{{ item.original_language }}</span>
        </div>
    </div>
</template>


<!-- Stile -->
<style lang="scss" scoped>
/*Stile dell'immagine*/
img {
    width: 200px;
    height: 200px;
}

/*Stile del titolo*/
h4 {
    font-size: 1.2rem;
    font-weight: bold;
}

/*Stile della card*/
.movie-card {
    flex-basis: calc(100%/5);
    border: 1px yellow solid;
    min-height: 450px;
    padding: 5px;
    cursor: pointer;
}

.movie-card:hover {
    opacity: 0.75;
}

/*Bandierina*/
.original-language {
    img {
        height: 25px;
        width: 50px;
    }
}
</style>