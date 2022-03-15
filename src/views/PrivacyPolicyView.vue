<template>
  <main>
    <PrivacyPolicy />
  </main>
</template>

<script>
    import PrivacyPolicy from '../components/PrivacyPolicy.vue'
    import { useMeta } from 'vue-meta'

    export default {
        name: 'PrivacypolicyView', 
        components: {
            PrivacyPolicy
        },
        setup() {
            useMeta({
                title: 'Privacy Policy'
            })
        },
    }
</script>