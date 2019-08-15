<template>
  <div id="app">
    <v-navbar />
    <router-view />
    <v-footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from './components/Navbar.vue'
import Pageheader from './components/PageHeader.vue'
import EventSection from './components/EventSection.vue'
import ValueSection from './components/ValueSection.vue'
import ValueCard from './components/ValueCard.vue'
import DoSection from './components/DoSection.vue'
import DoCard from './components/DoCard.vue'
import TeamSection from './components/TeamSection.vue'
import TeamCard from './components/TeamCard.vue'
import ChapterSection from './components/ChapterSection.vue'
import ChapterCard from './components/ChapterCard.vue'
import Speaker from './components/Speaker.vue'
import Partner from './components/Partner.vue'
import Conduct from './components/Conduct.vue'
import Footer from './components/Footer.vue'

Vue.component('v-navbar', Navbar)
Vue.component('v-pageheader', Pageheader)
Vue.component('v-eventsection', EventSection)
Vue.component('v-valuesection', ValueSection)
Vue.component('v-valuecard', ValueCard)
Vue.component('v-dosection', DoSection)
Vue.component('v-docard', DoCard)
Vue.component('v-teamsection', TeamSection)
Vue.component('v-teamcard', TeamCard)
Vue.component('v-chaptersection', ChapterSection)
Vue.component('v-chaptercard', ChapterCard)
Vue.component('v-speaker', Speaker)
Vue.component('v-partner', Partner)
Vue.component('v-conduct', Conduct)
Vue.component('v-footer', Footer)

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
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-image: url(/images/noise.png);
  background-repeat: repeat;
}
.has-background-light {
  background-color: #fafafa;
}
.has-background-lighter {
  background-color: #ffffff;
}
.has-text-dark {
  color: rgba(1, 29, 51, 0.38) !important;
}
.has-text-darker {
  color: rgba(1, 29, 51, 0.6) !important;
}
.has-text-darkest {
  color: rgba(1, 29, 51, 0.87) !important;
}
.has-text-light {
  color: rgba(0, 0, 0, 0.38) !important;
}
.has-text-lighter {
  color: rgba(255, 255, 255, 0.6);
}
.has-text-lightest {
  color: rgba(255, 255, 255, 0.87);
}
</style>
