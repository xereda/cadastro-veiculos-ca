<template>
  <div class="" id="car-detail">
    <breadcrumbs :objectLinks="breadcrumbsLinks"></breadcrumbs>
    {{ $route.params }}
  </div>
</template>

<script>
import jump from 'jump.js'
import { methodsMixins, computedMixins } from '@/mixins/main'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default {
  data () {
    return {
      breadcrumbsLinks: [
        { go: -1, name: 'Cars', activedLink: true },
        { name: this.$route.name === 'newCar' ? 'Novo' : 'Detalhes', activedLink: false }
      ]
    }
  },
  mixins: [
    methodsMixins,
    computedMixins
  ],
  mounted () {
    jump('#top')
  },
  components: {
    Breadcrumbs
  }
}
</script>

<style lang="scss">
</style>
