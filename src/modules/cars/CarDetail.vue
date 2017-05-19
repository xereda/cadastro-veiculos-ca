<template>
  <div class="" id="car-detail">
    <breadcrumbs :objectLinks="breadcrumbsLinks"></breadcrumbs>
    <card-detail :car="car"></card-detail>
  </div>
</template>

<script>
import jump from 'jump.js'
import { methodsMixins, computedMixins } from '@/mixins/main'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import CardDetail from './components/CardDetail.vue'

export default {
  data () {
    return {
      beer: {
        id: '',
        name: '',
        tagline: '',
        description: '',
        image: '',
        contributedBy: '',
        date: '',
        abv: 0,
        ibu: 0,
        targetFg: 0,
        targetOg: 0,
        ebc: 0,
        srm: 0,
        ph: 0,
        attenuationLevel: 0
      },
      breadcrumbsLinks: [
        { go: -1, name: 'Cars', activedLink: true },
        { name: 'Detalhes', activedLink: false }
      ]
    }
  },
  mixins: [
    methodsMixins,
    computedMixins
  ],
  beforeCreate () {
    jump('#top')
    this.getBeerDetail()
  },
  methods: {
    getBeerDetail () {
      this.setLoading(true)
    }
  },
  components: {
    Breadcrumbs,
    CardDetail
  }
}
</script>

<style lang="scss">
</style>
