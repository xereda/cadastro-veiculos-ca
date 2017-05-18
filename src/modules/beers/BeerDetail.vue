<template>
  <div class="" id="beer-detail">
    <breadcrumbs :objectLinks="breadcrumbsLinks"></breadcrumbs>
    <jmob-card-detail :beer="beer"></jmob-card-detail>
  </div>
</template>

<script>
import jump from 'jump.js'
import { getBeer } from '@/services/beers'
import { methodsMixins, computedMixins } from '@/mixins/main'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import JmobCardDetail from './components/CardDetail.vue'

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
        { go: -1, name: 'Beers', activedLink: true, afterAction: 'after-action' },
        { name: 'Detalhes', activedLink: false }
      ]
    }
  },
  mixins: [
    methodsMixins,
    computedMixins
  ],
  mounted () {
    jump('#top')
    this.getBeerDetail()
  },
  methods: {
    getBeerDetail () {
      this.setLoading(true)
      getBeer(this.$route.params.beerId)
        .then(response => response.data)
        .then(data => {
          this.hydrateSchemaBeerDetail(data)
          return data
        })
        .then(() => {
          this.setLoading(false)
        })
        .catch(response => {
          this.setLoading(false)
        })
    },
    hydrateSchemaBeerDetail (data) {
      console.log(data)
      const item = data[0]
      this.beer.id = item.id
      this.beer.tagline = item.tagline || ''
      this.beer.description = item.description || ''
      this.beer.name = item.name
      this.beer.image = item.image_url
      this.beer.date = item.first_brewed
      this.beer.contributedBy = item.contributed_by
      this.beer.abv = item.abv
      this.beer.ibu = item.ibu
      this.beer.targetFg = item.target_fg
      this.beer.targetOg = item.target_og
      this.beer.ebc = item.ebc
      this.beer.srm = item.srm
      this.beer.ph = item.ph
      this.beer.attenuationLevel = item.attenuation_level
    }
  },
  components: {
    Breadcrumbs,
    JmobCardDetail
  }
}
</script>

<style lang="scss">
</style>
