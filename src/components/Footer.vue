<template>
    <footer>   
        <div id="footer-message">
            <span class="footer-emoji">💃</span><span id="footer-tag-text">&nbsp;&nbsp;Never Miss a Chance to Dance!&nbsp;&nbsp;</span><span class="footer-emoji">🕺</span><br>
            <span id="footer-copyright-text">&#169; {{ copyrightYear }} - Free Salsa Library</span>
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

<style scoped>

footer {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 2rem;
    margin-top: 1rem;
    border-top: 1px solid #000;
}

#footer-message {
    text-align: center;
}

.footer-emoji {
    display: inline-block;
    font-size: 2rem;
    transition-duration: .75s;
}

footer:hover .footer-emoji {
    transform: scale(-1, 1);
}
</style>