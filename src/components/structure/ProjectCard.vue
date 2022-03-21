<template>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-2 col-md-2">
                            <img :src="project.img" class="img-thumbnail" :alt="project.name" :title="project.name">
                        </div>
                        <div class="col-lg-10 col-md-10">
                            <h1>{{project.name}}</h1>
                            <p>{{project.description}}</p>
                            <div class="text-right">
                                <a :href="project.url" target="_blank" class="btn" v-if="project.url">
                                    <i class="fa fa-globe mr-2" aria-hidden="true"></i> Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- row -->
</template>

<script>
    export default {
        name: 'ProjectCard',
        props: {
            project: Object
        }
    }
</script>

<style scoped>
    .card h1{
        margin-top: 0;
        margin-bottom: 0;
        font-size: 2.5rem
    }
    .card {
        background-color: #202945;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        margin-bottom: 25px;
    }

    .btn {
        background-color: #0f1526;
    }

    .btn:hover {
        background-color: #0f1526;
    }
</style>