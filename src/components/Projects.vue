<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>Projects</h1>
            </div>
        </div>
        <p>As a programming enthusiast, I often launch new projects to experiment with new technologies/frameworks and try to solve small everyday problems. This page shows the projects that are currently active. Abandoned projects, if open-source, can always be found on my <b><a :href="github.url" target="_blank" :title="github.name">Github</a></b> profile.</p>
        <div v-for="project in this.constants.projects" :key="project.name">
            <Project :project="project"/>
        </div>
    </div>
</template>

<script>
    import constants from "../constants.js"
    import Project from "./Projects/Project.vue";

    export default {
        name: 'Projects',
        components: {
            Project
        },
        data() {
            return {
                constants: constants,
                github: constants.social.filter(s => s.name == 'Github')[0]
            }
        }
    }
</script>

<style scoped>
    

</style>