import { createApp } from 'vue'

import { createMetaManager, plugin as metaPlugin } from 'vue-meta/dist/vue-meta.esm-browser'

import WOW from 'wow.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import '@/assets/css/base.css';
import '@/assets/css/animate.css';

import App from './App.vue'

import router from './router'

const app = createApp(App)

new WOW().init();


app.use(router)
app.use(createMetaManager()).use(metaPlugin)
app.mount('#app')
