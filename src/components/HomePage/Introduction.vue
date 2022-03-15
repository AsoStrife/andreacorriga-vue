<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>About me</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <p> Hello World! Welcome to my personal page. <br> I'm <strong>Andrea Corriga</strong> (obviously) currently live in Assemini (CA), Italy. </p>
                <p> I'm a <strong>PhD Student</strong> in Computer Science, Troll, Unpopular Streamer, Developer and a <u>Total Fucking Loser</u>. I like to work in Web Development, back-end mostly. You can find me on every social/game with the username <strong>AsoStrife</strong>.</p>
                <p> I've tried to make my first website at 8 years old with poor results, it was a terrible Pokémon website with one background image (repeated x-y) and a simple text <i>"Benvenuti sul più grande sito di pokemon del mondo!!"</i> translated: "Welcome on the best pokemon website on the world!!" made with FrontPage 2003. <br> 
                When I was 16 years old I've made <strong><a href="http://ffstory.andreacorriga.com" target="_blank">FFStory.it</a> </strong> an Italian Community of Final Fantasy and Kingdom Hearst. I've reuploaded the site just for fun. (visit <a href="http://ffstory.andreacorriga.com" target="_blank" title="ffstory link">http://ffstory.andreacorriga.com </a>)
                </p>
            </div> <!-- ./ item col -md-12 -->
                <div class="item col-lg-3 d-none d-lg-block">
                <img :src="constants.img.profile_chocobo" class="img-fluid" alt="andrea-corriga-asostrife-paint" title="andrea-corriga-asostrife-paint">
            </div>
        </div> <!-- ./ row -->
    </div>
</template>

<script>

export default {
    name: 'Introduction',
    props: {
        constants: Object
    }
}
</script>

<style scoped>
    
</style>