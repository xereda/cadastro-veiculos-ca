<template>
  <thead>
    <tr>
      <th class="checkbox-column"></th>
      <th v-for="title in columnTitle">{{ title }}</th>
      <th class="zoom-column"></th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'GridHeader',
  computed: {
    columnTitle () {
      return Object.keys(this.schema).map(e => this.schema[e].label)
    }
  },
  props: [
    'schema'
  ]
}
</script>

<style lang="scss">
  .checkbox-column, .zoom-column {
    width: 50px !important;
    // border: red 1px solid !important;
  }
</style>
