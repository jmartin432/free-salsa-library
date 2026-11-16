<script setup>
import SvgLogoComponent from './SvgLogoComponent.vue'

</script>

<template>
    <header>
        <div class="title-container">
            <div class="title-image-container">
                <SvgLogoComponent />
            </div>
            <div class="title-text-container">
                <h1>Free Salsa Library</h1>
                <h2>Dance! Dance! Dance!</h2>
            </div>
        </div>
            <!-- <nav>
                <RouterLink to="/">Content</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
            </nav> -->
    </header>
</template>

<style scoped>

header {
    display: flex;
    max-height: 100vh;
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 1px solid #000;
}

.title-container {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    margin-bottom: 1rem;
}

.logo-svg {
  width: 150px;
  height: auto;
  overflow: visible;
}

.ribbon-stroke {
  fill: none;
  stroke: #cf6bd6; /* Matches the purple/pink shade in your image */
  stroke-width: 12;
  stroke-linecap: round; /* Preserves the rounded ends shown in your image */
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: drawRibbon 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

@keyframes drawRibbon {
  to {
    stroke-dashoffset: 0;
  }
}

.title-image-container {
    padding: 1rem;
}

img {
    width: 125px;
}

@media (max-width: 600px) {
  .title-container {
    flex-direction: column;
  }

  .title-image-container {
    padding: .5rem;
  }

  img {
    width: 70px
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}

/* nav a {
    color: #000;
    text-decoration: none;
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid #000;
    font-family: "Open Sans";
    font-weight: 500;
} */

/* nav a:hover {
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
} */

</style>