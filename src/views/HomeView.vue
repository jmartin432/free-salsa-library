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
    padding: 0.5rem;
  }
}

</style>