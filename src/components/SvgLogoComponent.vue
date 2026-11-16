<script setup>
const ribbonPaths = [
  'm 8.56865,2.96363 c -2.51360,1.85721 -5.23116,-4.14260 -7.45895,-1.99105 -2.22779,2.15155 2.22778,7.66588 4.09497,5.47222',
  'm 2.72807,4.49021 c 2.51358,-1.85721 5.23114,4.14260 7.45893,1.99105 2.22779,-2.15155 -2.22777,-7.66588 -4.09497,-5.47222'
]
</script>

<template>
    <div class="svg-logo-container">
        <svg viewBox="0 0 11.2967 7.4538" stroke-width="1" stroke-linecap="round" class="logo-svg">
<!-- First half -->
            <g class="ribbon-group">
                <path
                    v-for="(d, index) in ribbonPaths"
                    :key="index"
                    :d="d"
                    class="ribbon-stroke"
                />
            </g>
        </svg>
    </div>
</template>

<style scoped>

.svg-logo-container {
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
  stroke: #d175cb;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: filter 0.3s ease;
}
  /* stroke-linecap: round; /* Preserves the rounded ends shown in your image */
  /* stroke-dasharray: 100; */
  /* stroke-dashoffset: 100; */
  /* animation: drawRibbon 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards; */

.ribbon-group {
  /* Explicit starting filter lets the browser interpolate smoothly on mouse-out */
  filter: drop-shadow(0 0 0 rgba(209, 117, 203, 0));
  transition: filter 2s ease-out;
}

.logo-svg:hover .ribbon-group {
  animation: pulseGlow .5s ease-in-out infinite alternate;
}

@keyframes pulseGlow {
  from {
    filter: drop-shadow(0 0 0 rgba(209, 117, 203, 0.5));
  }
  to {
    filter: drop-shadow(0 0 .5px rgba(209, 117, 203, 1))
  }
}

@media (max-width: 600px) {
  .svg-logo-container {
    flex-direction: column;
  }

  .svg-logo-container {
    padding: .5rem;
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