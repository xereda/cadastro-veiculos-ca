<template>
  <thead>
    <tr>
      <th class="checkbox-column"><checkbox v-model="selected"></checkbox></th>
      <th v-for="title in columnTitle">{{ title }}</th>
      <th class="zoom-column"></th>
    </tr>
  </thead>
</template>

<script>
import Checkbox from './types/Checkbox.vue'

export default {
  name: 'GridHeader',
  data () {
    return {
      selected: false
    }
  },
  watch: {
    currentPag (val) {
      this.selected = false
    },
    selected (val, oldVal) {
      val ? this.$emit('select-all') : this.$emit('deselect-all')
    }
  },
  computed: {
    columnTitle () {
      return Object.keys(this.schema).map(e => this.schema[e].label)
    }
  },
  components: {
    Checkbox
  },
  props: [
    'schema',
    'currentPag'
  ]
}
</script>

<style lang="scss">
  .checkbox-column, .zoom-column {
    width: 50px !important;
  }
</style>
