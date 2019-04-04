<template>
  <div id="app">
    <v-header />
    <router-view />
    <v-footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

Vue.component('v-header', Header)
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

$colors: (
  'primary': (
    $primary,
    $primary-invert
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
</style>
