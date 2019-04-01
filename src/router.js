import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'Events',
    component: function() {
      return import(/* webpackChunkName: "events" */ './views/events/list.vue')
    }
  },
  {
    path: '/event/:eventId',
    name: 'Event',
    component: function() {
      return import(/* webpackChunkName: "events" */ './views/events/get.vue')
    },
    props: true
  }
]

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
