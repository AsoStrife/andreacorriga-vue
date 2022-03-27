<template>
    <header class="header">

        <TopBar :constants="this.constants" />
        
        <Intro :constants="this.constants" />

        <PageNav :constants="this.constants" />

    </header>
</template>

<script>
    import TopBar from "./HeaderComponents/TopBar.vue"
    import Intro from "./HeaderComponents/Intro.vue"
    import PageNav from "./HeaderComponents/PageNav.vue"
    import constants from "../../constants"

    export default {
        name: 'Header',
        props: {
            constants: Object
        },
        components: {
            TopBar,
            PageNav,
            Intro
        },
        data() {
            return {
                constants: constants
            }
        }
    }
</script>
