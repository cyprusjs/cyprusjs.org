<template>
  <div class="app">
    <section class="hero is-primary is-bold">
      <div class="hero-body content">
        <p class="title">CyprusJS</p>
        <p class="subtitle">
          CyprusJS is a usergroup focused on JavaScript and related topics.
        </p>
      </div>
    </section>
    <section class="container">
      <b-loading
        :is-full-page="true"
        :active.sync="loading"
        :can-cancel="false"
      ></b-loading>
      <div class="content" v-show="!loading">
        <p class="title is-3 has-text-grey">Next Event:</p>
        <h1 class="title is-1 ">{{ nextEvent.title }}</h1>
        <h2 class="subtitle has-text-grey">{{ nextEvent.date }}</h2>
        <p v-html="nextEvent.description" />
        <h3 class="subtitle is-2">Talks</h3>
        <div class="columns">
          <div
            class="column"
            v-for="talk in nextEvent.talks"
            v-bind:key="talk.id"
          >
            <TalkCard v-bind:talk="talk" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TalkCard from '../components/TalkCard'
import events from '../utils/events'
import talks from '../utils/talks'
import marked from 'marked'

export default {
  components: {
    TalkCard
  },
  data() {
    return {
      loading: true,
      nextEvent: {
        title: '',
        description: '',
        date: '',
        talks: []
      }
    }
  },
  computed: {},
  methods: {},
  mounted() {
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    events().then(events => {
      if (events.length <= 0) {
        this.nextEvent = {
          title: 'To Be Announced',
          description:
            'We need your help! CyprusJS is a community run by volunteers. If you can help organise or host an event, please reach out to [@CyprusJS on Twitter](https://twitter.com/CyprusJS).'
        }
        this.loading = false
      } else {
        talks(events[0].number).then(eventTalks => {
          this.nextEvent = {
            title: events[0].title,
            description: marked(events[0].description, { sanitize: true }),
            date: new Date(events[0].due_on).toLocaleDateString(
              'en-GB',
              dateOptions
            ),
            talks: eventTalks.map(talk => {
              return {
                id: talk.id,
                title: talk.title,
                description: talk.body,
                speaker: talk.user
              }
            })
          }

          if (this.nextEvent.talks.length <= 2) {
            this.nextEvent.talks.push({
              title: 'Your Talk!',
              description:
                'Are you working with JavaScript? Tell the community what you do! [Submit a Talk](https://github.com/cyprusjs/talks/issues/new/choose).',
              speaker: {
                login: 'Your Name Here',
                avatar_url:
                  'https://avatars0.githubusercontent.com/u/49163991?s=400&u=b1914f5e5cb59e250d13b869a7ad10cac2b730d1&v=4'
              }
            })
          }

          this.loading = false
        })
      }
    })
  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
  margin-bottom: 50px;
}
p {
  white-space: pre-line;
}
</style>
