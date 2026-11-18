<script setup>
import { reactive, ref, computed } from 'vue';

// Replace with your actual API Gateway Invoke URL + route
const API_URL = 'https://vqunf4jiyg.execute-api.us-west-2.amazonaws.com/subscribe';

const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    website: '' // Honeypot field for bots
});

const submitStatus = ref(null)
const submitMessage = ref(null)

const fallbackEmail = ref('');
const emailParts = ['justin', 'freesalsalibrary', 'com'];

const emailWarning = ref(false);
const isSubmitting = ref(false);
const submittingMessage = 'Submitting...';
const createdMessage = 'You were successfully subscribed. Please check your email for a confirmation.'
const updatedMessage = 'Your subscription was successfully updated. Please check your email for a confirmation.'
const errorMessage = 'Oops! Something went wrong. Please try again or contact us directly.'


const setSuccessTimeout = () => {
    setTimeout(() => {
        submitStatus.value = null;
    }, 5000);
}

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const resetForm = () => {
    emailWarning.value = false;
    isSubmitting.value = false;
    form.firstName = '';
    form.lastName = '';
    form.email = '';
    form.website = '';
};

const handleSubmit = async () => {
  // 1. Silently stop if the hidden honeypot field was filled out by a bot
    if (form.website) {
        submitStatus.value = 'SUCCESS';
        return;
    }

    if (!validateEmail(form.email)) {
        emailWarning.value = true;
        return;
    }

    isSubmitting.value = true;
    submitStatus.value = 'SUBMITTING'

    try {
        // 2. Convert reactive object to application/x-www-form-urlencoded format
        const payload = new URLSearchParams({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email
        });

    // 3. Send POST request to API Gateway
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: payload.toString()
        });

        isSubmitting.value = false

        if (!response.ok) {
            console.error('Response NOT OK: ', response)
            throw new Error(`Response Not OK: Status: ${response.status}`);
        } else {
            let responseBody
            try {
                responseBody = await response.json();
            } catch(err) {
                console.error('Error Parsing Response Body', err)
                throw new Error('Error Parsing Response Body')
            }
            console.log('Response Body: ', responseBody);
            submitStatus.value = responseBody.status || 'ERROR'
            resetForm()
            setSuccessTimeout()
        }
    } catch(err) {
        console.error('Form Submission Error:', err);
        fallbackEmail.value = `${emailParts[0]}@${emailParts[1]}.${emailParts[2]}`;
        submitStatus.value = 'ERROR'
    } finally {}
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="contact-form">

    <div id="name-inputs">
        <div>
            <label for="firstName">First Name</label>
            <input id="firstName" v-model.trim="form.firstName" type="text"/>
        </div>

        <div>
            <label for="lastName">Last Name</label>
            <input id="lastName" v-model.trim="form.lastName" type="text"/>
        </div>    
    </div>

    <div>
      <label for="email"><span class="required">*</span> Email <span v-if="emailWarning" class="required">Please enter a valid email address.</span></label>
      <input id="email" v-model.trim="form.email" type="email" required />
    </div>

    <!-- Hidden honeypot input to catch spam bots -->
    <div class="honeypot" aria-hidden="true">
      <label for="website">Website</label>
      <input id="website" v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
    </div>

    <button type="submit" :disabled="isSubmitting">Submit</button>

    <p v-if="submitStatus === 'SUBMITTING'">{{ submittingMessage }}</p>
    <p v-if="submitStatus === 'CREATED'" class="success">{{ createdMessage }}</p>
    <p v-if="submitStatus === 'UPDATED'" class="success">{{ updatedMessage }}</p>
    <p v-if="submitStatus === 'ERROR'" class="error">
      {{ errorMessage }}
      <a :href="`mailto:${fallbackEmail}`">{{ fallbackEmail }}</a>
    </p>

  </form>
</template>

<style scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px
}

.contact-form div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

#name-inputs {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.honeypot {
    position: absolute;
    left: -9999px;
    opacity: 0;
    pointer-events: none;
}

button {
    align-self: flex-start;
    padding: .5rem;
    border-radius: 4px;
}

.required {
    color: #b91c1c;
}

.success {
    color: #15803d;
}

.error {
    color: #b91c1c;
}
</style>
