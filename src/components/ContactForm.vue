<template>
  <div id="contact-form-main">
        <h3>Contact Us</h3>
        <div id="submit-message-container">
            <span>{{submitMessage}}</span>
        </div>
        <div class="contact-form-container">
            <form id="contact-form" method="post" autocomplete="off">
            <!-- <div class="form-item">
                <label for="topic">Topic<span class="required-warning">{{ topicWarning }}</span></label>
                <select name="topic" id="topic-selector" v-model="topic">
                    <option value="">Please Select a Topic...</option>
                    <option v-for="item in topicOptions" :value="item.value" :key="item.value">
                        {{ item.label }}
                    </option>
                </select>
            </div> -->
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
                <div class="submit-button-container form-item">
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
                    2: {value: 'Content Question', label: 'Content Question'},
                    3: {value: 'Content Suggestion', label: 'Content Suggestion'},
                    4: {value: 'Volunteering', label: 'Volunteering' },
                    5: {value: 'Website Issue', label: 'Website Issue'},
                },
                question: null,
                name: '',
                email: '',
                message: '',
                //topicWarning: ' * ',
                nameWarning: ' * ',
                emailWarning: ' * ',
                messageWarning: ' * ',
                submitMessage: 'Your message was submitted. Keep on dancing!'
            };
        },

        methods: {

            resetForm() {
                this.name = this.email = this.message = "";
            },
            async submitForm(event) {
                console.log('VALIDATING FORM DATA');
                //this.topicWarning = !this.topic ? " * Please choose a topic." : " * ";
                this.nameWarning = !this.name ? " * This field is required." : " * ";
                this.emailWarning = ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) ? " * " : " * Please enter a valid email."
                this.messageWarning = !this.message ? " * This field is required." : " * ";
                if (!this.name || !((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) || !this.message) return;
                console.log('SUBMITTING FORM');
                const submitButton = document.getElementById('form-submit-button');
                submitButton.setAttribute('disabled', true);
                //const response = { status: 200 }; //Dont forget to comment out
                //const response = { status: 400 }; //Dont forget to comment out
                try {
                    const response = await fetch(
                    this.url, {
                        method: "POST",
                        mode: "cors",
                        credentials: "omit",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        redirect: "follow",
                        body: JSON.stringify({
                           // "topic": this.topic,
                            "name": this.name,
                            "email": this.email,
                            "message": this.message,
                            "honeyPot": this.question
                        })
                    });
                    const data = await response.json();
                    console.log('RESPONSE: ', data);
                    console.log('RESPONSE OK: ', response.ok),
                    console.log('RESPONSE STATUS: ', response.status);
                    const submitMessageContainer = document.getElementById('submit-message-container');
                    submitMessageContainer.classList.add('visible');
                    if (response.status !== 200) {
                        this.submitMessage = 'There was a problem submitting the form. Please send an email to justin@freesalsalibrary.com'
                        throw new Error('CONTACT FORM SUBMISSION ERROR')
                    } else {
                        this.submitMessage = 'Your message was submitted. Keep on dancing!';
                        setTimeout(() => {
                            submitMessageContainer.classList.remove('visible');
                            this.resetForm();
                        }, 5000);
                        console.log('SUCCESS');
                    }
                } catch (error) {
                    console.error('ERROR: ', error);
                } finally {
                    submitButton.disabled = false;                   
                }
            }
        },
    };
</script>

<style scoped>

#contact-form-main {
    display: flex;
    flex-direction: column;;
    justify-content: center;
    width: 60%;
    margin: auto;
}

#submit-message-container {
    font-family: "Open Sans";
    font-size: 1rem;
    opacity: 0;
    height: 0;
    padding: 0 15px;
    overflow: hidden;
    transition: opacity 0.5s ease-out, height 0.5s ease-out, padding 0.5s ease-out
}

#submit-message-container.visible {
    opacity: 1;
    height: auto; /* Reclaim space for the content */
    padding: 15px;
}

.form-item {
    margin: 1rem 0 1rem 0;
}

.nobueno {
    display: none;
}

.required-warning {
    color: red;
}

label {
    color: #000;
    margin-bottom: .25rem;
    font-family: "Open Sans";
    font-size: 1rem;
}

label span {
    color: #000;
}

label {
    display: block;
}

input, textarea, select {
    padding: 4px 3px;
    border: 2px solid #000;
    border-radius: 4px;
    background-color: #ddd;
    font-family: Alegreya;
    font-size: 1rem;
    box-sizing: border-box;
    margin-bottom: 5px;
}

input, textarea {
    width: 80%;
}

input:focus, textarea:focus {
    outline: none;
    box-shadow: 0 0 10px 5px #d175cb;
}

button {
    background-color: #ddd;
    border: 2px solid #000;
    border-radius: 4px;
    color: #000;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: block;
    transition-duration: 0.4s;
    font-family: "Open sans";
    font-size: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
    box-shadow: 0 0 10px 5px #d175cb;
}

button:active {
  /* Shifts the button down by 4 pixels when clicked */
  transform: translateY(4px); 
  /* Adjusts the shadow to simulate being "pressed" into the surface */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2); 
}

@media (max-width: 600px) {
  #contact-form-main {
    width: 90%;
  }

  textarea {
    width: 100%;
  }
}


/* select.number-select {
    width: 70px;
}

select.text-select {
    width: 100px;
} */

/* input[type='range']::-webkit-slider-thumb:hover {
  box-shadow: 5px 5px 10px #AC68A777, -5px -5px 10px #AC68A777, -5px 5px 10px #AC68A777,5px -5px 10px #AC68A777;
  cursor: pointer;
} */

/* input[type='range']{
    -webkit-appearance: none;
    margin-top: .5rem;
    height: .65rem;
    background-color: lightgray;
    border: none;
    cursor: pointer;
    transition-duration: 0.4s;
}

input[type='range']::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;
    height: 1rem;
    width: 1rem;
    border-radius: 3px;
    background: #000;
    border: 1px solid #000;
    cursor: pointer;
    transition-duration: 0.4s;
} */

</style>
