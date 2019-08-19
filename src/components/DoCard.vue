<template>
  <article>
    <figure class="image is-48x48">
      <img :src="whatwedo.image" v:alt="headline" />
    </figure>
    <h4
      class="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-weight-semibold has-text-darkest"
    >
      {{ whatwedo.headline }}
    </h4>
    <p
      class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-darker"
      v-html="whatwedo.paragraph"
    ></p>
  </article>
</template>

<script>
export default {
  name: 'DoCard',
  props: ['whatwedo']
}
</script>

<style scoped></style>
