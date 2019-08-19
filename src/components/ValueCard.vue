<template>
  <article>
    <figure class="image is-48x48">
      <img :src="value.image" v:alt="headline" />
    </figure>
    <h4
      class="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-weight-semibold has-text-darkest"
    >
      {{ value.headline }}
    </h4>
    <p
      class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-darker"
    >
      {{ value.paragraph }}
    </p>
  </article>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style scoped></style>
