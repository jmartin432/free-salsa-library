<script setup>
import SubscribeFormContainer from './SubscribeFormContainer.vue';

const calendarUrl = "https://calendar.google.com/calendar/u/0?cid=Y180YjQ5YjIzYzU3YmE5ZmJmOTIxNmEyMmJjZTM5ZDM2ODdmOTlmMzI5ZmMxYzhlNzQ3ZTFiNWQ1OWY2ZGE4YmY0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
const eventFormUrl = "https://airtable.com/app9LkiiJl1SaYYnt/pagKc5as9NU85TaHJ/form"
</script>

<template>
    <div id="calendar-container">
        <h3 id="calendar-header-title">Portland Salsa Events Calendar</h3>

        <div id="calendar-details" class="calendar-details-item">
            <p id="calendar-details-text">This is a public calendar of Salsa events in the Portland, OR area.<br><br>
                You can subscribe or contribute to the calendar at the bottom of the page.
            </p>
        </div>
    
        <div id="calendar-iframe-container">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&showCalendars=0&src=Y180YjQ5YjIzYzU3YmE5ZmJmOTIxNmEyMmJjZTM5ZDM2ODdmOTlmMzI5ZmMxYzhlNzQ3ZTFiNWQ1OWY2ZGE4YmY0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23f09300" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
        <div>
            <p id="calendar-subscribe-details">
                You can subscribe to this Google calendar by <a :href="calendarUrl" target="_blank">clicking here</a>.<br><br>
                If you would like to add an event to the calendar, please use <a :href="eventFormUrl" target="_blank">this form</a>.<br><br>
                You can subscribe to the weekly events newsletter below.
            </p>
        </div>
        <div id="subscribe-container">
            <SubscribeFormContainer />
        </div>
    </div>
</template>

<style scoped>
#calendar-container {
    width : 100%;  
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;;
}

p {
    font-size: 1.25rem;
    line-height: 2rem;
}

#calendar-iframe-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 75%; /* Adjust aspect ratio as needed */
    overflow: hidden;
}

#calendar-iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

#subscribe-container {
    flex: 1;
    width: 100%;
}

@media (max-width: 767px) {

    h3 {
        font-size: 1.65rem;
    }

    p, a {
        font-size: 1rem;
        line-height: 1.5rem;
    }
}
</style>