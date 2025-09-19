<template>
    <footer>   
        <div class="footer-message">
            <span class="footer-emoji footer-emoji-flipped">💃</span><span id="footer-text">&nbsp;&nbsp;&#169; {{ copyrightYear }} - Free Salsa Library&nbsp;&nbsp;</span><span class="footer-emoji">🕺</span>
        </div>        
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                copyrightYear: new Date().getFullYear()
            };
        },
    }
</script>

<style>

footer {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 2rem;
    border-top: 1px solid #000;
}

#footer-emoji-right {
    display: inline-block;
    transform: scale(-1, 1);
    transition-duration: .75s;
}

#footer-emoji-left {
    display: inline-block;
    transform: scale(1, 1);
    transition-duration: .75s;
}

footer:hover #footer-emoji-right {
    transform: scale(1, 1);
}

footer:hover #footer-emoji-left {
    transform: scale(-1, 1);
}

/* #footer-social-icons {
    display: flex;
    justify-content: center;
}

.social-icon-container{
    padding: 1rem 2rem;
}

.social-icon {
    width: 2rem;
}

@media screen and (max-width: 600px) {
    .title-container {
        flex-direction: column;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    nav a {
      font-size: .75rem;
    }

    .title-image {
        width: 4rem;
        height: max-content;
        padding: .5rem 0;
    }

    .social-icon {
        width: 1.5rem;
    }
} */




</style>

<!-- <div id="footer-social-icons">
            <div class="social-icon-container">
                <a href="https://github.com/jmartin432/fabric-designer" target="_blamk">
                    <img class="social-icon" src="@/assets/images/github_mark.svg" alt="GitHub Logo" />
                </a>
            </div>
            <div  class="social-icon-container">
                <a href="https://www.linkedin.com/in/justinleemartin" target="_blamk">
                    <img class="social-icon" src="@/assets/images/linkedin_mark.svg" alt="Linkedin Logo" />
                </a>
            </div>
            <div  class="social-icon-container">
                <a href="https://www.instagram.com/backandforthdesigns/" target="_blank">
                    <img class="social-icon" src="@/assets/images/instagram_mark.svg" alt="Instagram Logo" />
                </a>
            </div>
        </div> -->


        <!-- /* footer > div > img {
    height: 20px;
    margin: 0px 15px;
} */

/* .footer-contact {
    display: flex;
    flex-direction: row;
} */

/* .footer-contact-item {
    flex: 50%
} */
  
/* Responsive layout - makes a one column layout instead of a two-column layout */ -->
