<template>
  <header class="hero is-medium" id="pageheader" aria-label="page header">
    <div class="hero-body" aria-label="page header">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-8">
            <div class="divider"></div>
            <h1 class="title is-1 is-light is-semibold has-text-lightest">
              CyprusJS
            </h1>
            <div class="divider"></div>
            <h2 class="subtitle is-4 has-text-lightest">{{ $t('motto') }}</h2>
            <div class="divider"></div>
            <div class="buttons are-medium">
              <a href="#events" class="button">
                <strong>Upcoming Events</strong>
              </a>
              <a href="#speaker" class="button is-inverted is-outlined"
                >Propose a talk!</a
              >
            </div>
          </div>
          <div class="column">
            <figure class="image is-square">
              <img src="../assets/cyprusjs.svg" />
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

<style scoped>
header#pageheader {
  background-image: linear-gradient(
    235deg,
    #01c1c3 0%,
    #011d33 100%
  ) !important;
  overflow: hidden;
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
