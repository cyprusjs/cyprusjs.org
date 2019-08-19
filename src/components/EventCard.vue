<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <h4 class="title">{{ event.title }}</h4>
        <h5 class="subtitle">
          <time>{{ event.date }}</time>
          <span
            class="has-text-weight-semibold"
            v-html="event.description"
          ></span>
        </h5>
        <div class="columns">
          <div class="column" v-for="talk in talks" v-bind:key="talk.id">
            <TalkCard v-bind:gitTalk="talk" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TalkCard from '../components/TalkCard'
import talks from '../utils/talks'
import marked from 'marked'

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

export default {
  name: 'EventCard',
  props: ['gitEvent'],
  data() {
    return {
      event: {},
      talks: []
    }
  },
  components: {
    TalkCard
  },
  mounted() {
    this.event = {
      title: this.gitEvent.title,
      description: marked(this.gitEvent.description, { sanitize: true })
    }
    if (this.gitEvent.due_on) {
      this.event.date = new Date(this.gitEvent.due_on).toLocaleDateString(
        'en-GB',
        dateOptions
      )
    } else {
      this.event.date = 'TBA'
    }

    if (this.event.title.indexOf('Beer') === -1) {
      this.event.hasTalks = true
      talks(this.gitEvent.number).then(talks => {
        this.talks = talks
        if (talks.length < 2) {
          talks.push({
            title: 'Your Talk!',
            body:
              'Are you working with JavaScript? Tell the community what you do! [Submit a Talk](https://github.com/cyprusjs/cyprusjs/issues/new/choose).',
            user: {
              login: 'Call for Speakers is open!',
              avatar_url: '/images/cyprusjs.svg'
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.shade {
  padding: 25px;
  background-color: rgba(41, 227, 171, 25%);
}
.content p {
  white-space: pre-line;
}
.card {
  border: none;
  border-radius: 13px;
  transition: 0.3s;
  box-shadow: 0 2px 6px 0px rgba(0, 16, 28, 0.12),
    0 3px 8px -1px rgba(0, 16, 28, 0.08), 0 4px 12px -2px rgba(0, 16, 28, 0.05),
    0 5px 16px -3px rgba(0, 16, 28, 0.05);
}
.card:hover {
  box-shadow: 0 20px 24px -15px rgba(0, 16, 28, 0.16),
    0 40px 32px -20px rgba(0, 16, 28, 0.16),
    0 70px 48px -30px rgba(0, 16, 28, 0.08),
    0 40px 54px -5px rgba(0, 16, 28, 0.08);
  transform: scale(1.02);
}
</style>
