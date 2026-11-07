<script setup>
    const calendarUrl = "https://calendar.google.com/calendar/u/0?cid=Y180YjQ5YjIzYzU3YmE5ZmJmOTIxNmEyMmJjZTM5ZDM2ODdmOTlmMzI5ZmMxYzhlNzQ3ZTFiNWQ1OWY2ZGE4YmY0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
    const eventFormUrl = "https://airtable.com/app9LkiiJl1SaYYnt/pagKc5as9NU85TaHJ/form"
</script>

<template>
    <div id="calendar-container">
        <div id="calendar-header">
            <h3>Portland Salsa Events Calendar</h3>
            <div id="calendar-details">
                <p>This is a public calendar of Salsa events in the Portland, OR area.<br>
                You can subscribe to this calendar by <a :href="calendarUrl" target="_blank">clicking here</a>.<br>
                If you would like to add an event to the calendar, please use <a :href="eventFormUrl" target="_blank">this form</a>.</p>
            </div>
        </div>
        <div id="calendar-iframe-container">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&showCalendars=0&src=Y180YjQ5YjIzYzU3YmE5ZmJmOTIxNmEyMmJjZTM5ZDM2ODdmOTlmMzI5ZmMxYzhlNzQ3ZTFiNWQ1OWY2ZGE4YmY0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23f09300" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
</template>

<style scoped>
#calendar-container {
    width : 100%;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

p {
    font-size: 1.25rem;
    line-height: 2rem;
}

@media (max-width: 767px) {
  p, a {
    font-size: 1rem;
    line-height: 1.5rem;
  }
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
</style>