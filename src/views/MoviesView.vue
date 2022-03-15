

<template>
  <main>
    <Movies />
  </main>
</template>

<script>
    import Movies from '../components/Movies.vue'
    import { useMeta } from 'vue-meta'
    
    export default {
        name: 'MoviesViews', 
        components: {
            Movies
        },
        setup() {
            useMeta({
                title: 'Movies'
            })
        },
     }
</script>