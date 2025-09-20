<template>
    <footer>   
        <div class="footer-message">
            <span class="footer-emoji">💃</span><span id="footer-text">&nbsp;&nbsp;&#169; {{ copyrightYear }} - Free Salsa Library&nbsp;&nbsp;</span><span class="footer-emoji">🕺</span>
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
    border-top: 1px solid #000;
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