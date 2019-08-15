<template>
  <article>
    <h4
      class="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-weight-semibold has-text-darkest"
    >
      {{ chapter.headline }}
    </h4>
    <p
      class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-darker"
    >
      {{ chapter.paragraph }}
    </p>
    <a
      class="button is-primary is-outlined"
      :href="
        `https://github.com/cyprusjs/CyprusJS/issues?q=label%3A${chapter.headline}`
      "
      target="_blank"
    >
      <strong>Events in {{ chapter.headline }}</strong>
    </a>
  </article>
</template>

<script>
export default {
  name: 'ChapterCard',
  props: ['chapter']
}
</script>

<style scoped>
a.button.is-primary.is-outlined {
  color: rgba(0, 43, 77, 0.87);
  border: 2px solid rgba(0, 43, 77, 0.87);
  background-color: transparent;
  transition: 0.3s;
  font-weight: 500;
}
a.button.is-primary.is-outlined:hover {
  color: #ffffff;
  background-color: rgba(0, 43, 77, 0.87);
  border: 2px solid rgba(0, 43, 77, 0.87);
  transition: 0.3s;
}
</style>
