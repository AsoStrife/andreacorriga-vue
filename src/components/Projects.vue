<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>Projects</h1>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, sapien at tincidunt vestibulum, augue leo imperdiet arcu, vitae pharetra mi magna et diam. Duis vehicula eget nisl nec hendrerit. Fusce viverra ligula id laoreet volutpat. Nullam in odio sit amet nulla hendrerit aliquet. Sed fermentum placerat fringilla. Morbi mollis arcu ac lacus blandit, ut sagittis lacus venenatis. Aenean porta ipsum eros, mollis imperdiet eros volutpat non. Cras condimentum eget lorem sit amet ultrices. Nullam et leo ac purus euismod scelerisque sit amet ut massa.</p>
        <div v-for="project in this.constants.projects" :key="project.name">
            <ProjectCard :project="project"/>
        </div>
    </div>
</template>

<script>
    import constants from "../constants.js"
    import ProjectCard from "./structure/ProjectCard.vue";

    export default {
        name: 'Projects',
        components: {
            ProjectCard
        },
        data() {
            return {
                constants: constants
            }
        }
    }
</script>

<style scoped>
    

</style>