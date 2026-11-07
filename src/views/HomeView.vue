<script setup>
    import ContactForm from '../components/ContactForm.vue';
    import CalendarComponent from '../components/CalendarComponent.vue';
</script>

<template>
    <div id="home-view-container">
        <CalendarComponent></CalendarComponent>
        <!-- <ContactForm></ContactForm> -->
    </div>
</template>

<style>

@media (max-width: 767px) {
  #home-view-container {
    padding: 0.25rem;
  }

  p {
    font-size: .25rem;
    line-height: 2rem;
  }
}

</style>