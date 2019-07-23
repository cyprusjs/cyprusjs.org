<template>
  <nav class="header navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/cyprusjs.svg" />
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMenu" class="navbar-menu">
      <!--
        <div class="navbar-start">
          <router-link class="navbar-item" to="/events">Events</router-link>
        </div>
       -->

      <div class="navbar-end">
        <a class="navbar-item" href="#about-us">
          Our Beliefs
        </a>
        <a class="navbar-item" href="#our-team">
          Our Team
        </a>
        <a class="navbar-item" href="#what-we-do">
          What We Do
        </a>
        <a class="navbar-item" href="#who-we-are">
          Who We Are
        </a>
        <a class="navbar-item" href="#chapters">
          Chapters
        </a>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="https://ti.to/cyprusjs/" target="_blank">
              <strong>Upcoming Events</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  width: 100%;
  margin: 0;
  background-color: white;
  height: 65px;
  left: 0px;
  margin-left: 0;
}
</style>
