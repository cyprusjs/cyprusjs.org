<template>
  <section class="section has-background-dark-gradient" id="events">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-1-desktop is-10-desktop is-12-tablet">
          <h1 class="has-text-centered is-size-4 has-text-weight-semibold has-text-left-mobile has-text-light">Upcoming Events</h1>
          <div class="divider"></div>
          <div class="loading content" v-show="loading">
            <b-loading
              :is-full-page="false"
              :active.sync="loading"
              :can-cancel="false"
            ></b-loading>
          </div>
          <div class="columns">
            <div
              class="column is-4"
              v-for="event in upcomingEvents"
              v-bind:key="event.id"
            >
              <EventCard v-bind:gitEvent="event" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
