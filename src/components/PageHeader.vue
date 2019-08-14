<template>
  <header class="hero is-medium" id="pageheader" aria-label="page header">
    <vue-particles
      color="#ffffff"
      particleOpacity="0.26"
      particlesNumber="80"
      shapeType="circle"
      particleSize="4"
      linesColor="#ffffff"
      linesWidth="1"
      lineLinked="true"
      lineOpacity="0.19"
      linesDistance="150"
      moveSpeed="1"
      hoverEffect="true"
      hoverMode="grab"
    />
    <div class="hero-body" aria-label="page header">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-7">
            <div class="divider"></div>
            <h1 class="title is-1 is-light is-semibold has-text-lightest">CyprusJS</h1>
            <div class="divider"></div>
            <h2 class="subtitle is-4 has-text-lightest">
              We connect programmers in Cyprus who love <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript" target="_blank">Javascript</a> through cultivating events where we can give them a platform to educate, inspire and demonstrate new technologies to each other.
            </h2>
            <div class="divider"></div>
            <div class="buttons are-medium">
              <a href="#events" class="button">
                <strong>Upcoming Events</strong>
              </a>
              <a href="#partner" class="button is-inverted is-outlined">
                Become a Partner
              </a>
              <a href="#speaker" class="button is-inverted is-outlined">
                Be a Speaker
              </a>
            </div>
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

<style scoped>
header#pageheader {
  background-image: linear-gradient(235deg, #01C1C3 0%, #011D33 100%)!important;
  overflow: hidden;
}
div#particles-js {
  position: absolute;
}
a.button:hover {

}
a.button.is-inverted.is-outlined {
  color: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.6);
  background-color: transparent;
  transition: 0.3s;
  font-weight: 500;
}
a.button.is-inverted.is-outlined:hover {
  color: rgba(255, 255, 255, 0.87);
  border: 2px solid rgba(255, 255, 255, 0.87);
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
