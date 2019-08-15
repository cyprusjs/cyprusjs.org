<template>
  <section class="section has-background-light" id="our-team">
    <div class="container">
      <h3
        class="has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-semibold has-text-dark"
      >Our Team</h3>
      <div class="columns is-multiline">
        <div
          class="column is-6-desktop is-12-tablet"
          v-for="member in members"
          v-bind:key="member.id"
        >
          <v-teamcard v-bind:key="member.id" v-bind:member="member" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import team from '../utils/team'

export default {
  name: 'TeamSection',
  data() {
    return {
      members: []
    }
  },
  mounted() {
    team().then(people => {
      this.members = people
    })
  }
}
</script>

<style scoped></style>
