<script setup>
import { ref } from 'vue'

const email = ref('')
const botField = ref('')
const status = ref('idle') // 'idle' | 'loading' | 'success' | 'error'
const message = ref('')

// Replace with your actual Mailchimp URL (change /post? to /post-json?)
const MAILCHIMP_URL = 'https://freesalsalibrary.us7.list-manage.com/subscribe/post?u=794a505c943f0b2e22d69d2ea&amp;id=2426f43158&amp;f_id=00a2b2e0f0'
// Replace with your actual hidden input name from Mailchimp's embed code
const BOT_FIELD_NAME = 'b_794a505c943f0b2e22d69d2ea_2426f43158'

const subscribe = () => {
  if (!email.value) return

  status.value = 'loading'
  message.value = ''

  // Create a unique global callback name for JSONP
  const callbackName = `mcCallback_${Date.now()}`
  const script = document.createElement('script')

  const params = new URLSearchParams({
    EMAIL: email.value,
    [BOT_FIELD_NAME]: botField.value,
    c: callbackName
  })

  window[callbackName] = (response) => {
    delete window[callbackName]
    document.body.removeChild(script)

    if (response.result === 'success') {
      status.value = 'success'
      message.value = response.msg || 'Thank you for subscribing!'
      email.value = ''
    } else {
      status.value = 'error'
      // Mailchimp sometimes returns HTML links inside error messages
      message.value = response.msg.replace(/<[^>]*>?/gm, '') || 'Subscription failed. Please try again.'
    }
  }

  script.src = `${MAILCHIMP_URL}&${params.toString()}`
  script.onerror = () => {
    delete window[callbackName]
    document.body.removeChild(script)
    status.value = 'error'
    message.value = 'Network error. Please disable ad blockers or try again.'
  }

  document.body.appendChild(script)
}
</script>

<template>
    <div id="mc_embed_shell">
        <form @submit.prevent="subscribe" class="mailchimp-form">
            <p id="form-title">Subscribe to our newsletter</p>
            <div class="email-container">
                <input
                    id="mc-email"
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    :disabled="status === 'loading'"
                />
            </div>

            <!-- Honeypot field to prevent spam bots -->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input v-model="botField" type="text" :name="BOT_FIELD_NAME" tabindex="-1" />
            </div>
            <div class="button-container">
                <button type="submit" :disabled="status === 'loading'">
                    {{ status === 'loading' ? 'Subscribing...' : 'Subscribe' }}
                </button>
                <p style="margin: 0px auto;">
                    <a 
                        href="http://eepurl.com/cvJhAIrr2T" 
                        title="Mailchimp - email marketing made easy and fun"
                        target="_blank">
                        <span 
                            style="display: inline-block; background-color: transparent; border-radius: 4px;">
                            <img 
                                class="refferal_badge" 
                                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                                alt="Intuit Mailchimp" 
                                style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;">
                            </span>
                        </a>
                    </p>

            </div>

            <p v-if="message" :class="['feedback', status]">
            {{ message }}
            </p>
        </form>
    </div>
</template>

<style scoped>
.mailchimp-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
}

#form-title {
  padding: 0px;
  display: block;
}

.button-container {
  display: flex;
  gap: 0.5rem;
}

button {
  align-self: center;
}
.feedback.success {
  color: #000000;
}
.feedback.error {
  color: #dc2626;
}
</style>
