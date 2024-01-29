<!-- Logica -->
<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    props: {
        placeholder: String,
        submitLabel: String,
    },
    emits: ['term-change', 'form-submit']
};
</script>

<!-- Template -->
<template>
    <!-- Form di ricerca -->
    <form @submit.prevent="$emit('form-submit')">
        <!-- Imput dell'utente -->
        <input class="fs-3" v-model.trim="searchTerm" type="text" :placeholder="placeholder || 'Cerca un titolo...'"
            @keyup="$emit('term-change', searchTerm)">
        <!-- Bottone per cercare -->
        <button class="fs-3 mx-2 mb-2 btn btn-secondary" type="submit">{{ submitLabel || 'Cerca' }}</button>
    </form>
</template>

<!-- Stile -->
<style lang="scss" scoped></style>