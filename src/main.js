import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Buefy from 'buefy'
import i18n from './i18n'

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

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  )

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
