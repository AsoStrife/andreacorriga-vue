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
                    lang: constants.meta.language,
                },
                description: constants.main.description,
                /*
                meta: [
                    {
                        name: "author",
                        content: constants.meta.author,
                    },
                    {
                        name: 'keywords',
                        content: constants.meta.keywords
                    },
                    {
                        name: 'robots',
                        content: constants.meta.robots
                    },
                    {
                        name: 'language',
                        content: constants.meta.language
                    },
                    {
                        name: 'rating',
                        content: constants.meta.rating
                    },
                    {
                        property: 'fb:app_id',
                        content: constants.facebook_open_graph.app_id
                    },
                    {
                        property: 'og:type',
                        content: constants.facebook_open_graph.type
                    },
                    {
                        property: 'og:url',
                        content: constants.facebook_open_graph.url
                    },
                    {
                        property: 'og:image',
                        content: constants.facebook_open_graph.image
                    },
                    {
                        property: 'og:title',
                        content: constants.main.main_title
                    }
                ]
                */
            })
        }
    }
</script>