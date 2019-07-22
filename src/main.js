import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Buefy from 'buefy'
import i18n from './i18n'
import Particles from '../node_modules/particles.js'

Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

let app = null
if (!app) {
  app = new Vue({
    router,
    i18n,

    render: function(h) {
      return h(App)
    }
  }).$mount('#app')
}
