<template>
  <table class="table">
    <grid-header :schema="schema"
                 @select-all="selectAll"
                 @deselect-all="deselectAll"
                 :current-pag="currentPag"></grid-header>
    <grid-body :schema="schema"
               :data="data"
               :current-pag="currentPag"
               :page-limite="pageLimite"
               :selecteds="selecteds"
               :field-index="fieldIndex"
               @select-one="selectOne"
               @deselect-one="deselectOne"></grid-body>
  </table>
</template>

<script>
import GridHeader from './Header.vue'
import GridBody from './Body.vue'

export default {
  name: 'Grid',
  methods: {
    selectAll () {
      console.log('dentro da selectAll() do DataGrid.vue')
      this.$emit('select-all')
    },
    deselectAll () {
      console.log('dentro da deselectAll() do DataGrid.vue')
      this.$emit('deselect-all')
    },
    selectOne (index) {
      console.log('dentro da selectOne() da DataGrid.vue', index)
      this.$emit('select-one', index)
    },
    deselectOne (index) {
      console.log('dentro da deselectOne() da DataGrid.vue', index)
      this.$emit('deselect-one', index)
    }
  },
  components: {
    GridHeader,
    GridBody
  },
  props: [
    'schema',
    'data',
    'currentPag',
    'pageLimite',
    'selecteds',
    'field-index'
  ]
}
</script>

<style lang="css">
</style>
