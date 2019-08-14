<template>
  <article>
    <figure class="image is-48x48">
      <img :src="belief.image" v:alt="headline">
    </figure>
    <h4 class="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-weight-semibold has-text-darkest">
      {{belief.headline}}
    </h4>
    <p class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-darker">
      {{belief.paragraph}}
    </p>
  </article>
</template>

<script>
export default {
  props: ['belief']
}
</script>

<style scoped></style>
