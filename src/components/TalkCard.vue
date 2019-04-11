<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              v-bind:src="talk.speaker.avatar_url"
              v-bind:alt="talk.speaker.login"
            />
          </figure>
        </div>
        <div class="media-content">
          <h4 class="title is-4">
            <a v-bind:href="talk.speaker.html_url">{{ talk.speaker.login }}</a>
          </h4>
        </div>
      </div>

      <div class="content">
        <p v-html="compiledMarkdown" />
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'TalkCard',
  props: ['gitTalk'],
  computed: {
    compiledMarkdown: function() {
      return marked(this.gitTalk.body, { sanitize: true })
    }
  },
  data() {
    return {
      talk: {
        title: '',
        speaker: {}
      }
    }
  },
  mounted() {
    this.talk = {
      title: this.gitTalk.title,
      speaker: this.gitTalk.user
    }
  }
}
</script>
