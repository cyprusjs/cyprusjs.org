<template>
  <nav class="header navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/cyprusjs-logo.svg" />
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
        <a class="navbar-item has-text-weight-semibold" href="#about-us">
          Our Beliefs
        </a>
        <a class="navbar-item has-text-weight-semibold" href="#our-team">
          Our Team
        </a>
        <a class="navbar-item has-text-weight-semibold" href="#what-we-do">
          What We Do
        </a>
        <a class="navbar-item has-text-weight-semibold" href="#who-we-are">
          Who We Are
        </a>
        <a class="navbar-item has-text-weight-semibold" href="#chapters">
          Chapters
        </a>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary is-outlined" href="https://github.com/cyprusjs/" target="_blank">
              <strong>Github</strong>
            </a>
            <a class="button is-primary" href="https://ti.to/cyprusjs/" target="_blank">
              <strong>Events</strong>
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
nav.header.navbar.is-fixed-top {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(34,34,34,0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
   0 20px 30px -15px rgba(0,0,0,0.5),
   0 40px 40px -20px rgba(0,0,0,0.4),
   0 70px 50px -30px rgba(0,0,0,0.3),
   0 40px 60px -5px rgba(0,0,0,0.3);
}
a.navbar-item{
  color: rgba(255, 255, 255, 0.6);
  transition: 0.3s;
}
a.navbar-item:hover {
  color: rgba(255, 255, 255, 0.87);
  background-color: transparent;
}
a.button.is-primary {
  color: #121217;
  background-color: rgba(255, 255, 255, 0.87);
  border: 2px solid rgba(255, 255, 255, 0.87);
  border: 2px solid rgba(255, 255, 255, 0.6);
  transition: 0.3s;
}
a.button.is-primary:hover {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgba(255, 255, 255, 0.38);
  border: 2px solid rgba(255, 255, 255, 0.87);
  transition: 0.3s;
}
a.button.is-primary.is-outlined {
  color: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.6);
  background-color: transparent;
  transition: 0.3s;
}
a.button.is-primary.is-outlined:hover {
  color: #121217;
  background-color: rgba(255, 255, 255, 0.87);
  border: 2px solid rgba(255, 255, 255, 0.87);
  transition: 0.3s;
}
</style>
