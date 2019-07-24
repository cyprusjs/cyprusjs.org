<template>
  <article class="card">
    <header class="card-content">
      <h4 class="has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-semibold">
        {{ event.title }}
      </h4>
      <h5 class="has-text-centered is-size-6-desktop is-size-7-tablet is-size-7-mobile">
        <time>{{ event.date }}</time>
      </h5>
    </header>
    <footer class="card-footer">
      <p class="card-footer-item">
        <a v-html="event.description">More Info</a>
      </p>
      <p class="card-footer-item">
        <span>
          <a v-html="event.description">Sign Up</a>
        </span>
      </p>
    </footer>
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
