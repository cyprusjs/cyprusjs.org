<template>
  <header class="hero is-medium has-background-darker-gradient" id="pageheader" aria-label="page header">
    <figure id="particles-js"></figure>
    <div class="hero-body" aria-label="page header">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6">
            <div class="divider"></div>
            <h1 class="title is-1 is-light is-semibold has-text-lightest">CyprusJS</h1>
            <div class="divider"></div>
            <h2 class="subtitle is-4 has-text-lighter">
              We connect programmers in Cyprus who love <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript" target="_blank">Javascript</a> through cultivating events where we can give them a platform to educate, inspire and demonstrate new technologies to each other.
            </h2>
            <div class="divider"></div>
            <div class="buttons are-medium">
              <a href="#events" class="button">Upcoming Events</a>
              <a href="#partner" class="button is-inverted is-outlined">Become a Partner</a>
              <a href="#speaker" class="button is-inverted is-outlined">Be a Speaker</a>
            </div>
          </div>
          <div class="column is-6">
            <figure class="image is-hidden-mobile">
              <img src="assets/images/illustrations/media.svg" alt="">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped></style>
