<template>
  <main>
    <Skills />
  </main>
</template>

<script>
    import Skills from '../components/Skills.vue'
    import { useMeta } from 'vue-meta'

     export default {
        name: 'SkillsView', 
        components: {
            Skills
        },
        setup() {
            useMeta({
                title: 'Skills'
            })
        },
     }
</script>