<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-12 col-lg-12 col-md-12">
                <h1>Skills</h1>
                <span v-for="skill in constants.skills" :key="skill">
                    <span class="skill-tag"> {{skill}} </span>
                </span>
            </div> <!-- ./ item col -md-12 -->
        </div> <!-- ./ row -->
    </div>
</template>

<script>

import constants from "../../constants.js"

export default {
    name: 'Skills',
    data() {
        return {
            constants: constants
        }
    }
}
</script>

<style scoped>
    .skill-tag:hover {
        background: #202945;
    }

    .skill-tag {
        -moz-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
        -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
        padding: 6px 30px;
        display: inline-block;
        margin-right: 10px;
        border: 1px solid #f5f5f5;
        font-weight: 500;
        margin-bottom: 15px;
        font-size: 16px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
    }
</style>