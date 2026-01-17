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

h3 {
    padding: 1rem;
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: Poppins;
    font-size: 2rem;
    color: #000;
}

p {
    /* font-family: Alegreya; */
    padding: .75rem;
    font-size: 1.25rem;
}

p.p-title {
    text-align: center;
}

p.p-content {
    text-align: left;
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