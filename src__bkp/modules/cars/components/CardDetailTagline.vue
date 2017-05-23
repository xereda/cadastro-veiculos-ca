<template>
  <div class="box">
    <h5 class="subtitle is-5">Tagline</h5>
    <hr>
    <div class="notification custom-notification">{{ beer.tagline }}</div>

  </div>
</template>

<script>
export default {
  name: 'JmobCardDetailTagline',
  props: [
    'beer'
  ]
}
</script>

<style lang="scss">
.custom-notification {
  font-size: 0.85em;
  font-style: italic;
}
</style>
