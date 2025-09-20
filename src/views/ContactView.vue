<template>
  <div>
        <h3>Contact Us</h3>
        <p>
            Use the form below to get in touch.
        </p>
        <div id="contact-results-container" v-show="submitted">
            <div id="submit-success" v-if="submitSuccess">
                <p>Your message was submitted. Keep on dancing!</p>
             </div>
            <div id="submit-fail" v-else>
                <p>
                    There was a problem submitting your message. Please send an email to <a>info@justinlmartin.com</a>
                </p>
            </div>
        </div>
        <div class="contact-form-container">
            <form id="contact-form" method="post" autocomplete="off">
            <div class="form-item">
                <label for="topic">Topic<span class="required-warning">{{ topicWarning }}</span></label>
                <select name="topic" id="topic-selector" v-model="topic">
                    <option value="">Please Select a Topic...</option>
                    <option v-for="item in topicOptions" :value="item.value" :key="item.value">
                        {{ item.label }}
                    </option>
                </select>
            </div>
            <!-- Honey Pot -->
            <div class="form-item nobueno">
                <label for="question">Question</label>
                <input 
                    id="question"
                    required 
                    type="text"
                    v-model="question"
                />
            </div>
            <!-- End Honey Pot -->
            <div class="form-item">
                <label for="name">Name<span class="required-warning">{{ nameWarning }}</span></label>
                <input 
                    required 
                    type="text" 
                    id="name"
                    v-model="name"
                />
            </div>
            <div class="form-item">
                <label for="email-input">Email<span class="required-warning">{{ emailWarning }}</span></label>
                <input 
                    required 
                    type="email" 
                    id="email-input" 
                    v-model="email"
                />
            </div>
            <div class="form-item">
                <label for="message-input">Message<span class="required-warning">{{ messageWarning }}</span></label>
                <textarea 
                    required 
                    id="message-input" 
                    rows="3" 
                    v-model="message"
                ></textarea>
            </div>
            <div class="submit-button-container">
                <button type="button" id="form-submit-button" @click=submitForm>Submit</button>
            </div>
        </form>
        </div>
    </div>
</template>

<script scoped>
    export default {
        data() {
            return {
                url: 'https://oj6vub3ps7.execute-api.us-east-1.amazonaws.com/prod/contact/fsl',
                topic: '',
                topicOptions: {
                    1: {value: 'General Information', label: 'General Information'},
                    2: {value: 'Website Issue', label: 'Website Issue'},
                },
                question: null,
                name: '',
                email: '',
                message: '',
                topicWarning: ' * ',
                nameWarning: ' * ',
                emailWarning: ' * ',
                messageWarning: ' * ',
                submitting: false,
                submitted: false,
                submitSuccess: true,
            };
        },

        methods: {

            resetForm() {
                this.name = this.email = this.message = "";
                this.submitStatus = null;
            },
            displySubmitMessage(succes) {
                if (success) {
                    // show message and set fade timeout
                } else {
                    // show error with x button
                }

            },
            async submitForm(event) {
                //event.preventDefault()
                if (this.submitting) {
                    console.log('Form is submitting, Please wait.');
                    return; 
                }
                console.log('SUBMITTING FORM');
                this.topicWarning = !this.topic ? " * Please choose a topic." : " * ";
                this.nameWarning = !this.name ? " * This field is required." : " * ";
                this.emailWarning = ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) ? " * " : " * Please enter a valid email."
                this.messageWarning = !this.message ? " * This field is required." : " * ";
                if (!this.topic || !this.name || !((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) || !this.message) return;
                this.submitting = true;
                try {
                    // const response = await fetch(
                    // this.url, {
                    //     method: "POST",
                    //     mode: "cors",
                    //     credentials: "omit",
                    //     headers: {
                    //         "Content-Type": "application/json",
                    //     },
                    //     redirect: "follow",
                    //     body: JSON.stringify({
                    //         "topic": this.topic,
                    //         "name": this.name,
                    //         "email": this.email,
                    //         "message": this.message,
                    //         "honeyPot": this.question
                    //     })
                    // });
                    // console.log('RESPONSE OK: ', response.ok),
                    // console.log('RESPONSE STATUS: ', response.status);
                    // const data = await response.json();
                    // console.log('RESPONSE: ', data);


                    const response = { status: 200 }; //Dont forget to comment out
                    //const response = { status: 400 }; //Dont forget to comment out
                    if (response.status !== 200) {
                        throw new Error('CONTACT FORM SUBMISSION ERROR')
                    } else {
                        console.log('SUCCESS');
                        this.submitSuccess = true;
                        this.resetForm();
                    }
                } catch (error) {
                    console.error('ERROR: ', error);
                    this.submitSuccess = false;
                } finally {
                    this.submitted = true;
                    this.submitting = false;                    
                }
            }
        },
    };
</script>

<style>

.form-item input, .form-item textarea, .form-item select{
    background-color: #ddd;
}

.nobueno {
    display: none;
}
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
