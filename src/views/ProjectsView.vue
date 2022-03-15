<template>
  <main>
    <Projects />
  </main>
</template>

<script>
    import Projects from '../components/Projects.vue'
    import { useMeta } from 'vue-meta'
    
     export default {
         name: 'ProjectsView', 
         components: {
             Projects
         },
        setup() {
            useMeta({
                title: 'Projects'
            })
        },
     }
</script>