<template>
  <div class="app">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body content">
        <p class="title">CyprusJS</p>
        <p class="subtitle">CyprusJS is a usergroup focused on JavaScript and related topics.</p>
      </div>
    </section>
  </div>
</template>

<script>
import get from '../utils/get'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {
    get(
      `https://api.github.com/repos/cyprusjs/talks/issues?labels=proposals`
    ).then(data => {
      this.events = data
    })
  }
}
</script>

<style>
</style>
