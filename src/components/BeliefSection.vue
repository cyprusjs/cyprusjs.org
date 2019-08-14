<template>
  <section class="section has-background-lighter" id="about-us">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-1-desktop is-10-desktop is-12-tablet">
          <h3 class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-semibold has-text-dark">Our Beliefs</h3>
        </div>
      </div>
      <div class="columns">
        <div class="column is-offset-1-desktop is-10-desktop is-12-tablet">
          <div class="columns">
            <div class="column is-4" v-for="belief in beliefs" v-bind:key="belief.id">
              <v-beliefcard v-bind:key="belief.id" v-bind:belief="belief" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    const beliefs = [
      {
        id: 0,
        headline: 'Mission',
        paragraph: 'Provide great tech events and meetups for Javascript coders in Cyprus.',
        image: '../assets/bullseye.svg'
      },
      {
        id: 1,
        headline: 'Vision',
        paragraph: 'Become the number one community in Cyprus for JS developers.',
        image: '../assets/lightning.svg'
      },
      {
        id: 2,
        headline: 'Values',
        paragraph: 'Connect, Innovate, Educate, Inspire, Motivate, Cultivate & being kind.',
        image: '../assets/values.svg'
      }
    ]

    return {
      beliefs
    }
  }
}
</script>

<style scoped></style>
