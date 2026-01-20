<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
</script>

<template>
    <Header></Header>

    <RouterView class="view-container"/>

    <Footer></Footer>
</template>

<style>

.view-container {
    flex-grow: 1;
    padding: 2rem;
    /* border: 1px solid red; */
}

summary {
    font-size: 1.5rem;
    padding: 1rem;
}

ul {
    list-style-type: none;
    padding: 2rem;
}

li {
    padding: .5rem;
}

a {
    color: #000;
    font-size: 1.25rem;
}
</style>