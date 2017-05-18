<template>
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th class="is-hidden-mobile">Tagline</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(beer, index) in beers">
          <td>{{ beer.name }}</td>
          <td class="is-hidden-mobile">{{ beer.tagline }}</td>
          <td>
            <a class="button is-small" @click="openDetail(beer.id)" :id="'btn-access-detail-' + index">
              <span class="icon is-small">
                <i class="fa fa-search"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-infinite-scroll="fetchBeers" infinite-scroll-distance="10">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { methodsMixins, computedMixins } from '@/mixins/main'
import { getAllPaged as getBeers } from '@/services/beers'

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

export default {
  name: 'JmobBeersList',
  mixins: [
    methodsMixins,
    computedMixins
  ],
  data () {
    return {
    }
  },
  methods: {
    openDetail (beerId) {
      this.$router.push({ name: 'beerDetail', params: { beerId: beerId } })
    },
    fetchBeers () {
      this.setLoading(true)
      getBeers(this.currentPag, this.config.limitePerPage, {})
        .then(response => response.data)
        .then(data => {
          // console.log('data: ', data)
          this.hydrateSchema(data)
          return data
        })
        .then(() => {
          this.setLoading(false)
          this.setCurrentPag(this.currentPag + 1)
        })
        .catch(response => {
          this.setLoading(false)
        })
    },
    hydrateSchema (data) {
      data.forEach((e) => {
        const beerObject = {
          id: e.id,
          name: e.name || '',
          tagline: e.tagline || '',
          description: e.description || '',
          image: e.image_url
        }
        this.addBeer(beerObject)
      })
    }
  },
  components: {
  },
  directives: {
    infiniteScroll
  }
}
</script>

<style lang="scss">
  .jmob-card {
    cursor: pointer;
  }
</style>
