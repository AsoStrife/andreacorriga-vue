<template>
    <Introduction :constants="constants" />
    <Skills :constants="constants" />
</template>

<script>
    import Introduction from "./HomePage/Introduction.vue"
    import Skills from "./HomePage/Skills.vue"
    import constants from "../constants.js"

    export default {
        name: 'Home',
        components: {
            Introduction,
            Skills
        },
        data() {
            return {
                constants: constants
            }
        }
    }
</script>