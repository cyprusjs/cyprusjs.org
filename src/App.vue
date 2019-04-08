<template>
  <div id="app">
    <v-header />
    <router-view />
    <v-subscribe />
    <v-footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './components/Header.vue'
import Subscribe from './components/Subscribe.vue'
import Footer from './components/Footer.vue'

Vue.component('v-header', Header)
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
</style>
