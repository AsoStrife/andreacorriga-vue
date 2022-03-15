

<template>
  <main>
      <StrifeCoin />
  </main>
</template>

<script>
    import StrifeCoin from '../components/StrifeCoin.vue'
    import { useMeta } from 'vue-meta'

    export default {
        name: 'StrifeCoinViews', 
        components: {
            StrifeCoin
        },
        setup() {
            useMeta({
                title: 'Strife Coin'
            })
        },
    }
</script>