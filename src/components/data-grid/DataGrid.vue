<template>
  <table class="table">
    <grid-header :schema="schema"></grid-header>
    <grid-body :schema="schema"
               :data="data"
               :current-pag="currentPag"
               :page-limite="pageLimite"></grid-body>
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
  },
  props: [
    'schema',
    'data',
    'currentPag',
    'pageLimite'
  ]
}
</script>

<style lang="css">
</style>
