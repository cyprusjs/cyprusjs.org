<template>
  <section class="section has-background-light" id="chapters">
    <div class="container">
      <h3
        class="has-text-centered is-size-4-desktop is-size-5-tablet is-size-6-mobile has-text-weight-semibold has-text-dark"
      >
        Chapters
      </h3>
      <div class="columns is-centered is-multiline">
        <div
          class="column is-offset-1-desktop is-5-desktop is-6-tablet"
          v-for="chapter in chapters"
          v-bind:key="chapter.id"
        >
          <v-chaptercard v-bind:key="chapter.id" v-bind:chapter="chapter" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ChapterSection',

  data() {
    const chapters = [
      {
        id: 0,
        headline: 'Nicosia',
        paragraph:
          'Nicosia is the largest city, capital, and seat of government of the island of Cyprus. It is located near the centre of the Mesaoria plain, on the banks of the River Pedieos. It has been continuously inhabited for over 4,500 years. Nicosia is the southeasternmost of all EU member states capitals.',
        link: 'https://ti.to/cyprusjs/cyprusjs-nicosia'
      },
      {
        id: 1,
        headline: 'Limassol',
        paragraph:
          'Limassol is a city on the southern coast of Cyprus. It’s known for the centuries-old Limassol Castle, home to the Cyprus Medieval Museum and its collection of pottery and tombstones. On the seafront is the Prokymea (Molos) Sculpture Park, with sculptures by Cypriot, Greek and international artists.',
        link: 'https://ti.to/cyprusjs/cyprusjs-limassol'
      },
      {
        id: 2,
        headline: 'Paphos',
        paragraph:
          'Paphos is a city on the southwest coast of the Mediterranean island of Cyprus. Inhabited since Neolithic times, it has several sites relating to the cult of goddess Aphrodite, whose mythical birthplace was at Old Paphos (Kouklia).',
        link: 'https://ti.to/cyprusjs/cyprusjs-paphos'
      },
      {
        id: 3,
        headline: 'Larnaca',
        paragraph:
          'Larnaca (Larnarka) is a port city on the south coast of Cyprus. It´s known for Finikoudes Beach, a sandy strip in the city center backed by a palm-lined seaside promenade. Buzzing bars line the waterfront at Mackenzie Beach.',
        link: 'https://ti.to/cyprusjs/cyprusjs-larnaca'
      }
    ]

    return {
      chapters
    }
  }
}
</script>

<style scoped>
a.button.is-primary.is-outlined {
  color: rgba(0, 43, 77, 0.87);
  border: 2px solid rgba(0, 43, 77, 0.87);
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
