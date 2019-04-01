<template>
  <section class="footer">
    <div class="columns">
      <div class="column">
        <h5 class="title is-5">Home</h5>
        <ul>
          <router-link tag="li" to="/">Home</router-link>
          <router-link tag="li" to="/events">Events</router-link>
        </ul>
      </div>
      <div class="column">
        <h5 class="title is-5">Follow us</h5>
        <ul>
          <li>
            <a href="https://twitter.com/cyprusjs">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
