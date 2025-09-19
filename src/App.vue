<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    //import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
</script>

<template>
    <header>
        <div class="title-container">
            <div class="title-image-container">
              <img alt="Back and Forth Logo" class="logo title-image" src="@/assets/images/logo.svg" width="125" height="125" />
            </div>
            <div class="title-text-container">
                <h1>Free Salsa Library</h1>
                <h2>Dance! Dance! Dance!</h2>
            </div>
        </div>
            <nav>
                <RouterLink to="/">Content</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
            </nav>
    </header>

    <RouterView class="view-container"/>

    <Footer></Footer>
</template>

<style>

header {
    max-height: 100vh;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
}

.title-container {
    width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    margin-bottom: 1rem;
}

.title-image-container {
    align-self: center;
    padding: 0 1rem;
}

.title-image {
}

.title-text-container {
    align-self: center;
    padding: 0 1rem;
}

h1 {
    font-size: 4rem;
    color: #000;
    font-family: Oswald;
    font-weight: 700;
    /* text-shadow: 2px 2px 5px #D175CB88; */
    margin: 0;
}

h2 {
    font-size: 3rem;
    color: #000;
    font-family: Poppins;
    font-weight: 400;
    margin: 0;
}

nav {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    margin: auto;
    padding: 1rem 0;
    border-top: 1px solid #000
}

nav a {
    color: #000;
    text-decoration: none;
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid #000;
    font-family: "Open Sans";
    font-weight: 500;
}

nav a:hover {
    background-color: #555;
}

nav a.router-link-exact-active {
    color: #000;
    cursor: default;
    text-decoration: none;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a:first-of-type {
    border: 0;
}

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
    text-align: center;
    font-size: 1.25rem;
}

summary {
    font-size: 1.5rem;
    padding: 1rem;
}

details p {
    text-align: left;
}

details ul {
    list-style-type: none;
    padding: 2rem;
}
details li {
    padding: .5rem;
}

a {
    color: #000;
    font-size: 1.25rem;
}



/* footer {
font-size: 1rem;
font-family: "Poppins", sans-serif;
width: 100%;
padding: 2rem 0;
color: #000;
transition-duration: .75s;
border-top: 1px solid #000;
margin-top: 2rem;
}

#footer-message{
text-align: center;
}

#footer-social-icons {
display: flex;
justify-content: center;
}

.social-icon-container{
padding: 1rem 2rem;
}

.social-icon {
width: 2rem;
} */

@media screen and (max-width: 600px) {
    
}

#footer-emoji-right {
    display: inline-block;
    transform: scale(-1, 1);
    transition-duration: .75s;
}

#footer-emoji-left {
    display: inline-block;
    transform: scale(1, 1);
    transition-duration: .75s;
}

footer:hover #footer-emoji-right {
    transform: scale(1, 1);
}

footer:hover #footer-emoji-left {
    transform: scale(-1, 1);
}
</style>
