<template>
  <main>
    <HomePage />
  </main>
</template>

<script>
    import HomePage from '../components/HomePage.vue'
    import { useMeta } from 'vue-meta'

     export default {
        name: 'HomeView', 
        components: {
            HomePage
        },
        setup() {
            useMeta({
                title: ''
            })
        },
     }
</script>