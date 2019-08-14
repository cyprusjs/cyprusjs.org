<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-128x128">
        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h5 class="is-size-3-desktop is-size-4-tablet is-size-5-mobile has-text-weight-semibold has-text-darkest">
          {{team.name}}
        </h5>
        <h6 class="is-size-5-desktop is-size-6-tablet is-size-5-mobile has-text-dark">
          {{team.chapter}}
        </h6>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'TeamCard',
  props: ['team']
}
</script>

<style scoped>
.content h5 {
  margin-bottom: 0.25em;
}
</style>
