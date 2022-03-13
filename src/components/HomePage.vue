<template>
    <Introduction />
    <HomeSwiper />
    <Skills />
</template>

<script>
    import Introduction from "./HomePage/Introduction.vue"
    import HomeSwiper from "./HomePage/HomeSwiper.vue"
    import Skills from "./HomePage/Skills.vue"

    export default {
        name: 'Home',
        propos: {
            constants: Object
        },
        components: {
            Introduction,
            HomeSwiper,
            Skills
        }
    }
</script>