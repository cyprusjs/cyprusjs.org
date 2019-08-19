<template>
  <nav
    class="header navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/cyprusjs.svg" />
      </router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navMenu"
      >
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
          Our Values
        </a>
        <a class="navbar-item" href="#our-team">
          Our Team
        </a>
        <a class="navbar-item" href="#what-we-do">
          What We Do
        </a>
        <a class="navbar-item" href="#chapters">
          Chapters
        </a>
        <div class="navbar-item">
          <div class="buttons">
            <a
              class="button is-primary is-outlined"
              href="https://github.com/cyprusjs/"
              target="_blank"
            >
              Github
            </a>
            <a
              class="button is-primary"
              href="https://ti.to/cyprusjs/"
              target="_blank"
            >
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
  background-color: rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px -15px rgba(0, 16, 28, 0.16),
    0 40px 40px -20px rgba(0, 16, 28, 0.16),
    0 70px 50px -30px rgba(0, 16, 28, 0.08),
    0 40px 60px -5px rgba(0, 16, 28, 0.08);
}
a.navbar-item {
  color: rgba(0, 43, 77, 0.6);
  transition: 0.3s;
  font-weight: 500;
}
a.navbar-item:hover {
  color: rgba(0, 43, 77, 0.87);
  background-color: transparent;
}
a.button.is-primary {
  color: #ffffff;
  background-color: rgba(0, 43, 77, 0.87);
  border: 2px solid rgba(0, 43, 77, 0.6);
  transition: 0.3s;
}
a.button.is-primary:hover {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgba(0, 43, 77, 0.68);
  border: 2px solid rgba(0, 43, 77, 1);
  transition: 0.3s;
}
a.button.is-primary.is-outlined {
  color: rgba(0, 43, 77, 0.6);
  border: 2px solid rgba(0, 43, 77, 0.6);
  background-color: transparent;
  transition: 0.3s;
  font-weight: 500;
}
a.button.is-primary.is-outlined:hover {
  color: #ffffff;
  background-color: rgba(0, 43, 77, 0.87);
  border: 2px solid rgba(0, 43, 77, 0.87);
  transition: 0.3s;
}
</style>
