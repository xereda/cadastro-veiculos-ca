<template>
  <span>
    {{ formattedValue }}
  </span>
</template>

<script>
import numeral from 'numeral'
import 'numeral/locales/pt-br'
numeral.locale('pt-br')

export default {
  name: 'GridMonetary',
  computed: {
    formattedValue () {
      return numeral(this.value).format('$ 0,0.00')
    }
  },
  props: [
    'value'
  ]
}
</script>

<style lang="scss">
</style>
