<template>
  <div class="custom-card-detail-body">
    <div class="columns">
      <div class="column is-8">
        <div class="card">
          <div class="card-image custom-card-background has-text-centered">
            <nav class="level">
              <div class="level-item">
                <figure class="image">
                  <img v-lazy="beer.image" class="custom-imagem-detail">
                  <div v-lazy:background-image="beer.image"></div>
                </figure>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div class="column">
            <jmob-card-detail-table :beer="beer"></jmob-card-detail-table>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column">
            <jmob-card-detail-tagline :beer="beer"></jmob-card-detail-tagline>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column">
            <a class="button is-primary" @click="closebeerDetail()">
              <span class="icon">
                <i class="fa fa-sign-out"></i>
              </span>
              <span>Sair</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/store'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: store.state.config.images.loading,
  attempt: 1
})
import { computedMixins, methodsMixins } from '@/mixins/main'
import JmobCardDetailTable from './CardDetailTable.vue'
import JmobCardDetailTagline from './CardDetailTagline.vue'

export default {
  name: 'JmobCardDetailBody',
  mixins: [
    computedMixins,
    methodsMixins
  ],
  components: {
    JmobCardDetailTable,
    JmobCardDetailTagline
  },
  methods: {
    closebeerDetail () {
      this.$router.push({ name: 'beers' })
    }
  },
  props: [
    'user',
    'beer'
  ]
}
</script>

<style lang="scss">
  .custom-card-detail-body {
    margin-top: 30px;
  }
  .custom-imagem-detail {
    max-width: 150px;
    margin: 20px;
  }

</style>
