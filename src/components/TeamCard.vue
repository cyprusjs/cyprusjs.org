<template>
  <article class="media">
    <figure class="media-left">
      <svg class="clip-svg">
        <defs>
          <clipPath id="polygon-clip-hexagon" clipPathUnits="objectBoundingBox">
            <polygon points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
          </clipPath>
        </defs>
      </svg>
      <p class="image is-128x128">
        <img class="is-hexagon" :src="member.avatar_url" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h5 class="is-size-4 has-text-weight-semibold has-text-darkest">
          <a :href="html_url">{{ member.login }}</a>
        </h5>
        <h6
          class="is-size-5-desktop is-size-6-tablet is-size-5-mobile has-text-dark"
        ></h6>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'TeamCard',
  props: ['member']
}
</script>

<style scoped>
.content h5 {
  margin-bottom: 0.25em;
}
.clip-svg {
  width: 0;
  height: 0;
}
.is-hexagon {
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  -webkit-clip-path: url('#polygon-clip-hexagon');
  clip-path: url('#polygon-clip-hexagon');
}
</style>
