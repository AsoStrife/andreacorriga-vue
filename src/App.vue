<template>
    <Header />

    <RouterView />

    <Footer />
</template>

<script setup>
    import { RouterView } from 'vue-router'
    import Header from './components/structure/Header.vue'
    import Footer from './components/structure/Footer.vue'
    
</script>