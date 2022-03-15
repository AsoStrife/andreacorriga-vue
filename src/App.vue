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
    import { useMeta } from 'vue-meta'
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
                    lang: 'en',
                },
                description: constants.main.description,
                meta: [
                    {
                    name: 'keywords',
                    content:
                        'My description',
                    },
                ],
                author: "a",
                robots: "r",
                //language: "en",
                //rating: "rr",

                //"fb:app_id": "123"
                
            })
        }
    }
</script>