<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>About me</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <p> Welcome aboard foreigner, <br> I'm <strong>Andrea Corriga</strong> (obviously), <strong>Ph.D.</strong> and <strong>Software Engineer</strong> currently live in Sardinia, Italy. <br> You can find me on every social or videogame with the username <strong>AsoStrife</strong>.</p>
                <p>Don't take this site too seriously, this space is used 50% to talk about my professional life, including personal projects, and the remaining 50% to insert easter eggs, experiment with frameworks and talk about me.</p>
            </div> <!-- ./ item col -md-12 -->
            <div class="item col-lg-3 d-none d-lg-block">
                <img :src="constants.img.profile_chocobo" class="img-fluid" alt="andrea-corriga-asostrife-paint" title="andrea-corriga-asostrife-paint">
            </div>
        </div> <!-- ./ row -->

        <div class="row mt-3">
            <div class="col-lg-12 col-md-12">
                <p> I'm a {{currentAge}} old boy with several passions including sports, music and programming. I regularly practice body building in my personal home gym,swimming and I have been playing the electric guitar since I was eleven. I approached the world of programming when I was 8 years old trying to make my first website with very poor results. My first website was a terrible Pokémon website with one background image (repeated x-y) and a simple text <i>"Benvenuti sul più grande sito di pokemon del mondo!!"</i> translated: "Welcome on the best pokemon website on the world!!" made with FrontPage 2003. </p>
                <p>At the age of sixteen I launched my first site related to the world of Final Fantasy called <strong><a href="http://ffstory.andreacorriga.com" target="_blank">FFStory.it</a></strong> an Italian Community of Final Fantasy and Kingdom Hearst. I've reuploaded the site just for fun. (visit <a href="http://ffstory.andreacorriga.com" target="_blank" title="ffstory link">http://ffstory.andreacorriga.com </a>)
                </p>
            </div> <!-- ./ item col -md-12 -->    
        </div> <!-- ./ row -->
        
    </div>
</template>

<script>

    export default {
        name: 'Introduction',
        props: {
            constants: Object
        },
        methods: {
            getAge(birthday) {
                var ageDifMs = Date.now() - birthday.getTime();
                var ageDate = new Date(ageDifMs);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            }
        },
        data() {
            return {
                currentAge: Int32Array
            }
        },
        mounted() {
            this.currentAge = this.getAge( new Date(1993, 9, 21))
        }
    }
</script>

<style scoped>
    
</style>