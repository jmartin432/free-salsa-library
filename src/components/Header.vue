<template>
    <header>
        <div class="title-container">
            <div class="title-image-container">
                <img alt="Back and Forth Logo" class="logo title-image" src="@/assets/images/logo.svg"/>
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
    margin: 0 auto;
    justify-content: center;
    margin-bottom: 1rem;
}

.title-image-container {
    padding: 1rem;
}

img {
    width: 125px;
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

nav a {
    color: #000;
    text-decoration: none;
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid #000;
    font-family: "Open Sans";
    font-weight: 500;
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