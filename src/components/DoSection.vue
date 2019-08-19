<template>
  <section class="section has-background-lighter" id="what-we-do">
    <div class="container">
      <h3
        class="has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-semibold has-text-dark"
      >
        What We Do
      </h3>
      <div class="columns is-multiline">
        <div
          class="column is-offset-1-desktop is-5-desktop is-6-tablet"
          v-for="whatwedo in whatwedos"
          v-bind:key="whatwedo.id"
        >
          <v-docard v-bind:key="whatwedo.id" v-bind:whatwedo="whatwedo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DoSection',

  data() {
    const whatwedos = [
      {
        id: 0,
        headline: 'Venue',
        paragraph:
          'Our amazing partners are the ones who make it possible for us to host our tech meetups. They help us with a physical space to accommondate the event. In return we help them by marketing their services & products too the event attendees.',
        image: '/images/box.svg'
      },
      {
        id: 1,
        headline: 'Responsibility',
        paragraph:
          'Our community events are made by and for the attendees. As a comfort for our partners a senior team member will take responsibility of making sure that the venue is left in the same condition as we found it in.',
        image: '/images/responsibility.svg'
      },
      {
        id: 2,
        headline: 'Format',
        paragraph:
          'We have a well structured format for our events that are made to inspire our attendees and spark discussions. Our format has been iteratated and proved its value for all parties involved thanks to the time Patrick spent founding <a href="http://barcelonajs.com/" target="_blank">BarceloneJS</a>. For more information about our format, <a href="https://github.com/cyprusjs/CyprusJS/blob/master/PLAYBOOK.md" target="_blank">see our playbook</a>.',
        image: '/images/sun.svg'
      },
      {
        id: 3,
        headline: 'Lectures',
        paragraph:
          'We provide a physical platform for hackers, programmers & tech people to meet, talk, share ideas and connect. Anyone can propose subjects or sign up to be a speaker by adding a propasal or request to our <a href="https://github.com/cyprusjs/cyprusjs/issues/new/choose" target="_blank">Github</a> or contact us on our <a href="https://twitter.com/CyprusJS" target="_blank">Twitter</a>.',
        image: '/images/keynote.svg'
      },
      {
        id: 4,
        headline: 'Socializing',
        paragraph:
          'Our event schedule is created so there is plenty of time to network and socialize both before and after the public talks. We try to create a relaxed enviroment in which socializing with all attendees and speakers comes naturally.',
        image: '/images/talking.svg'
      },
      {
        id: 5,
        headline: 'Car Pooling',
        paragraph:
          'Through our social media channels, foremost our <a href="https://github.com/cyprusjs/CyprusJS/issues" target="_blank">Github</a> we encourage and try to help out with car pooling from all different cities within Cyprus so you don´t have to miss an event just because it´s hosted in a different city. Easy, fun and a good option for the enviroment.',
        image: '/images/car.svg'
      }
    ]

    return {
      whatwedos
    }
  }
}
</script>

<style scoped></style>
