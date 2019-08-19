<template>
  <section class="section has-background-lighter" id="about-us">
    <div class="container">
      <h3
        class="has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-semibold has-text-dark"
      >
        Our Values
      </h3>
      <div class="columns is-centered">
        <div class="column" v-for="value in values" v-bind:key="value.id">
          <v-valuecard v-bind:key="value.id" v-bind:value="value" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    const values = [
      {
        id: 0,
        headline: 'For Everyone',
        paragraph:
          'We think coding is awesome and everyone should feel welcome at our event. This includes that we are expecting all participants to be awesome to each other and respect the Code of Conduct.',
        image: '/images/values.svg'
      },
      {
        id: 1,
        headline: 'Open Source',
        paragraph:
          'Open source is the heart of CyprusJS. All our events, our website and our software are open source and can be modified by everyone.',
        image: '/images/values.svg'
      },
      {
        id: 2,
        headline: 'Non Profit',
        paragraph: 'All our events are not-for-profit and run by volunteers.',
        image: '/images/values.svg'
      }
    ]

    return {
      values
    }
  }
}
</script>

<style scoped></style>
