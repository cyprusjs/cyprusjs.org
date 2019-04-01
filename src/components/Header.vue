<template>
  <nav class="header navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/cyprusjs.svg">
      </router-link>
    </div>

    <div id="header" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/events">Events</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
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
