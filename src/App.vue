<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content} ${constants.main.second_title}` : constants.main.main_title }}</template>
    </metainfo>

    <Header />

    <RouterView />

    <Footer />
</template>

<script>
    import { RouterView } from 'vue-router'
    import Header from './components/structure/Header.vue'
    import Footer from './components/structure/Footer.vue'
    import { useMeta, useActiveMeta } from 'vue-meta/dist/vue-meta.esm-browser'
    import constants from './constants'

    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                constants: constants
            }
        },
        setup() {
            useMeta({
                htmlAttrs: { 
                    lang: 'en' 
                }
            })
            
        }
    }
</script>