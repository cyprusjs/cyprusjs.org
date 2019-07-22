<template>
  <div class="app">
    <header class="hero is-primary" aria-label="page header">
      <div class="hero-body" aria-label="page header">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6">
              <div class="divider"></div>
              <h1 class="title is-1 is-light is-semibold">CyprusJS</h1>
              <div class="divider"></div>
              <h2 class="subtitle is-4">
                Our mission is to connect people that loves <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript" target="_blank">Javascript</a> thru events and give them an platform to educate, inspire and demonstrate to each other and by doing so cultivate all programmers living or visiting Cyprus.
              </h2>
              <div class="divider"></div>
              <div class="buttons are-medium">
                <a href="#events" class="button is-outlined">See All Events</a>
                <a href="#partner" class="button is-outlined">Become a Partner</a>
                <a href="#talk" class="button is-outlined">Be a Speaker</a>
              </div>
            </div>
            <div class="column is-6">
              <figure class="image">
                <img src="assets/images/illustrations/media.svg" alt="">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="events">
        <div class="container">
          <h1 class="title is-3 has-text-grey">Upcoming Events:</h1>
          <div class="loading content" v-show="loading">
            <b-loading
              :is-full-page="false"
              :active.sync="loading"
              :can-cancel="false"
            ></b-loading>
          </div>
          <div class="columns">
            <article
              class="content"
              v-for="event in upcomingEvents"
              v-bind:key="event.id"
            >
              <EventCard v-bind:gitEvent="event" />
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="columns">
            <article class="column is-4">
              <h4 class="has-text-centered is-size-2 has-text-weight-semibold has-text-left-mobile">Mission</h4>
              <p class="has-text-centered is-size-4 has-text-left-mobile">Provide great tech events and meetups for Javascript coders.</p>
            </article>
            <article class="column is-4">
              <h4 class="has-text-centered is-size-2 has-text-weight-semibold has-text-left-mobile">Vision</h4>
              <p class="has-text-centered is-size-4 has-text-left-mobile">Become the number one event organizer in Cyprus for Javascript developers.</p>
            </article>
            <article class="column is-4">
              <h4 class="has-text-centered is-size-2 has-text-weight-semibold has-text-left-mobile">Values</h4>
              <p class="has-text-centered is-size-4 has-text-left-mobile">Connect, Educate, Inspire, Motivate, being helpful and safe and having fun.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section" id="talk">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <h4 class="is-size-2 has-text-weight-semibold">Share Your Ideas</h4>
              <p class="is-size-4">
                Are you working with JavaScript? Are you creating a new application or framework within the <a href="https://nodejs.org/" target="_blank">NodeJS</a> ecosystem that you want to show? Come to one of our events and speak to our community what you do! <br />
                Submit your talk to our <a href="https://github.com/cyprusjs/talks" target="_blank">Github</a>.
                Or contact us at our <a href="https://twitter.com/CyprusJS" target="_blank">Twitter</a> or <a href="mailto:info@cyprusjs.org?subject=I would like to perform a talk at CyprusJS">Email</a>.
              </p>
            </div>
            <div class="column is-7">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="partner">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-7">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="column is-5">
              <h4 class="is-size-2 has-text-weight-semibold">We need your help!</h4>
              <p class="is-size-4">
                We are tech community focused on the programming language JavaScript and related topics. We organise
                events regularly across cities in Cyprus; such as Nicosia, Limassol, Paphos and Larnaca. We do this free of charge for attendees and in the true spirit of <a href="https://opensource.org/" target="_blank">Open-Source</a> philosophy.
                Our community is runned by enthusiastic volunteers. If you can help us organise/host an event, please reach out to our <a href="https://twitter.com/CyprusJS" target="_blank">Twitter</a> or contact us on our <a href="mailto:info@cyprusjs.org?subject=I would like to host a CyprusJS event">Email</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <h4 class="is-size-2 has-text-weight-semibold">Our Code of Conduct</h4>
              <p class="is-size-4">
                Our goal is to have an awesome, inclusive and safe community meetup
                where people meet, hang out together, chat, listen to talks, exchange
                ideas and make new friends. Any harmful or discriminating behaviour
                will not be tolerated and results in the offending person being
                expelled from the meetup.
              </p>
              <p class="is-size-4">
                For details on what kinds of behaviour are not tolerated and
                consequences for violating these rules, we refer to the
                <a href="https://rubyberlin.github.io/code-of-conduct"
                  >Berlin Code of Conduct.</a
                >
              </p>
            </div>
            <div class="column is-7">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/960x960.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <h3 class="has-text-centered is-size-2 has-text-weight-semibold has-text-left-mobile">Our Team</h3>
            </div>

            <div class="column is-4">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-96x96">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <h5 class="title is-4">John Smith</h5>
                  <p class="subtitle is-6">@johnsmith</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script>
import EventCard from '../components/EventCard'
import events from '../utils/events'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      loading: true,
      upcomingEvents: []
    }
  },
  computed: {},
  methods: {},
  mounted() {
    events().then(events => {
      events.sort(function(a, b) {
        if (!a.due_on) {
          return -1
        } else if (!b.due_on) {
          return -1
        } else {
          return new Date(a.due_on) - new Date(b.due_on)
        }
      })
      if (events.length <= 0) {
        this.upcomingEvents.push({
          title: 'To Be Announced',
          description:
            'We need your help! CyprusJS is a community run by volunteers. If you can help organise or host an event, please reach out to [@CyprusJS on Twitter](https://twitter.com/CyprusJS).'
        })
      } else {
        this.upcomingEvents = events
      }
      this.loading = false
    })
  }
}
</script>

<style scoped>
.loading {
  min-height: 250px;
}
.container {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
