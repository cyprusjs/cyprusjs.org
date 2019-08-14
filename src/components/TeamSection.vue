<template>
  <section class="section has-background-light" id="our-team">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-1-desktop is-10-desktop is-12-tablet">
          <h3 class="is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-semibold has-text-dark">Our Team</h3>
        </div>
      </div>
      <div class="columns">
        <div class="column is-offset-1-desktop is-10-desktop is-12-tablet">
          <h4 class="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-weight-semibold has-text-darkest">Enthusiastic Volunteers</h4>
        </div>
      </div>
      <div class="columns">
        <div class="column is-offset-1-desktop is-10-desktop is-12-tablet">
          <div class="columns is-multiline">
            <div class="column is-6-desktop is-12-tablet" v-for="team in teams" v-bind:key="team.id">
              <v-teamcard v-bind:key="team.id" v-bind:team="team" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamSection',

  data() {
    const teams = [
      {
        id: 0,
        name: 'Patrick Heneise',
        chapter: 'Founder',
        image: ''
      },
      {
        id: 1,
        name: 'Jonas Bröms',
        chapter: 'Paphos',
        image: ''
      },
      {
        id: 2,
        name: 'Alexander Gazizov',
        chapter: 'Limassol',
        image: ''
      },
      {
        id: 3,
        name: 'Ali Elgin',
        chapter: 'Nicosia',
        image: ''
      }
    ]

    return {
      teams
    }
  }
}
</script>

<style scoped></style>
