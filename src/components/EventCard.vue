<template>
  <article class="content shade">
    <h1 class="title is-1">{{ event.title }}</h1>
    <h2 class="subtitle has-text-grey">{{ event.date }}</h2>
    <p v-html="event.description" />
    <div class="talks" v-show="event.hasTalks">
      <h3 class="subtitle is-2">Talks</h3>
      <div class="columns">
        <div class="column" v-for="talk in talks" v-bind:key="talk.id">
          <TalkCard v-bind:gitTalk="talk" />
        </div>
      </div>
    </div>
  </article>
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
        if (talks.length <= 2) {
          talks.push({
            title: 'Your Talk!',
            body:
              'Are you working with JavaScript? Tell the community what you do! [Submit a Talk](https://github.com/cyprusjs/talks/issues/new/choose).',
            user: {
              login: 'You',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/49163991?s=400&u=b1914f5e5cb59e250d13b869a7ad10cac2b730d1&v=4'
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
</style>
