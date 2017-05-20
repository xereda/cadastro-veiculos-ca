<template>
  <table class="table">
    <grid-header></grid-header>
    <grid-body></grid-body>
  </table>
</template>

<script>
import GridHeader from './Header.vue'
import GridBody from './Body.vue'

export default {
  name: 'Grid',
  components: {
    GridHeader,
    GridBody
  }
}
</script>

<style lang="css">
</style>
