<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>Swiper</h1>

                <div class="swiper" id="prova">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper" style="min-height:300px;">
                        <!-- Slides -->
                        <div class="swiper-slide"  style="min-height:300px; background-color:white; border-radius:5px; color: #000; border: 1px solid #000;">Slide 1</div>
                        <div class="swiper-slide"  style="min-height:300px; background-color:white; border-radius:5px; color: #000; border: 1px solid #000;">Slide 2</div>
                        <div class="swiper-slide"  style="min-height:300px; background-color:white; border-radius:5px; color: #000; border: 1px solid #000;">Slide 3</div>
                        
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>

                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                </div><!-- swiper -->

                
            </div>
        </div>
    </div>
</template>

<script>
    
    import Swiper from 'swiper/bundle'
    import 'swiper/css/bundle'
    const swiper = new Swiper('.swiper', {
        effect: 'cards',
        cardsEffects: {
            slideShadows: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        }
    })
    
    export default {
        name: 'HomeSwiper'
    }

</script>

<style scoped>
    
</style>