<template>
  <div id="app">
    <v-navbar />
    <router-view />
    <v-subscribe />
    <v-footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from './components/Navbar.vue'
import Pageheader from './components/PageHeader.vue'
import Eventsection from './components/EventSection.vue'
import Ourbeliefs from './components/OurBeliefs.vue'
import Whoweare from './components/WhoWeAre.vue'
import Whatwedo from './components/WhatWeDo.vue'
import Ourteam from './components/OurTeam.vue'
import Chapters from './components/Chapters.vue'
import Speaker from './components/Speaker.vue'
import Partner from './components/Partner.vue'
import Conduct from './components/Conduct.vue'
import Subscribe from './components/Subscribe.vue'
import Footer from './components/Footer.vue'

Vue.component('v-navbar', Navbar)
Vue.component('v-pageheader', Pageheader)
Vue.component('v-eventsection', Eventsection)
Vue.component('v-ourbeliefs', Ourbeliefs)
Vue.component('v-whatwedo', Whatwedo)
Vue.component('v-whoweare', Whoweare)
Vue.component('v-ourteam', Ourteam)
Vue.component('v-chapters', Chapters)
Vue.component('v-speaker', Speaker)
Vue.component('v-partner', Partner)
Vue.component('v-conduct', Conduct)
Vue.component('v-footer', Footer)
Vue.component('v-subscribe', Subscribe)

export default {
  name: 'CyprusJS'
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

$primary: hsl(172, 66, 62);
$background: hsl(195, 2, 100);
$link: hsl(205, 77, 60);
$info: hsl(28, 87, 95);

$primary-invert: findColorInvert($primary);
$info-invert: findColorInvert($info);
$link-invert: findColorInvert($link);

$colors: (
  'primary': (
    $primary,
    $primary-invert
  ),
  'info': (
    $info,
    $info-invert
  ),
  'link': (
    $link,
    $link-invert
  )
);

@import '~bulma';
@import '~buefy/src/scss/buefy';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  margin-top: 65px;
}
section.section {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background-image: url(assets/noise.png);
  background-repeat: repeat;
}
.has-background-dark-gradient {
  background-color: #17171D;
}
.has-background-darker-gradient {
  background-color: #121217;
}
.has-text-light {
  color: rgba(255, 255, 255, 0.38);
}
.has-text-lighter {
  color: rgba(255, 255, 255, 0.6);
}
.has-text-lightest {
  color: rgba(255, 255, 255, 0.87);
}
</style>
