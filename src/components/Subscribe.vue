<template>
  <section id="newsletter" class="hero is-link">
    <div class="hero-body">
      <div class="container has-text-centered">
        <button v-on:click="showPopup" class="is-large button">
          Subscribe to our newsletter
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    showPopup: () => {
      window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
        L.start({
          baseUrl: 'mc.us20.list-manage.com',
          uuid: '8858834fd255949c495385d43',
          lid: '9e29c55be5',
          uniqueMethods: true
        })
      })
      document.cookie =
        'MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;'
    }
  }
}
</script>

<style></style>
