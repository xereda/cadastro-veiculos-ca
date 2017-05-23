<template>
  <span>
    {{ linkLabel }}
  </span>
</template>

<script>
export default {
  name: 'GridThumbnail',
  computed: {
    linkLabel () {
      return this.value === null ? this.linkNullLabel : this.linkOpenLabel
    }
  },
  props: [
    'value',
    'linkOpenLabel',
    'linkNullLabel'
  ]
}
</script>

<style lang="css">
</style>
