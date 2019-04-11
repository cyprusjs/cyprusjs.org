<template>
  <div class="app">
    <section class="hero is-primary is-bold">
      <div class="hero-body content">
        <h1 class="title is-3">CyprusJS</h1>
        <p class="subtitle is-marginless is-paddingless">
          A community focused on JavaScript and related topics. We organise
          regular events across Cyprus. Free and open source.
        </p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title is-3 has-text-grey">Upcoming Events:</h1>
        <div class="loading content" v-show="loading">
          <b-loading
            :is-full-page="false"
            :active.sync="loading"
            :can-cancel="false"
          ></b-loading>
        </div>
        <div
          class="content"
          v-for="event in upcomingEvents"
          v-bind:key="event.id"
        >
          <EventCard v-bind:gitEvent="event" />
        </div>
      </div>
    </section>
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
