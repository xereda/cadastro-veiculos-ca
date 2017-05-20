<template>
  <div class="content is-small">
    <grid></grid>
  </div>
</template>

<script>
import { methodsMixins, computedMixins } from '@/mixins/main'
import Grid from './components/grid/Grid.vue'

export default {
  name: 'CarsList',
  mixins: [
    methodsMixins,
    computedMixins
  ],
  data () {
    return {
    }
  },
  methods: {
    openDetail (carId) {
      this.$router.push({ name: 'carDetail', params: { carId: carId } })
    },
    fetchCars () {
      this.setLoading(true)
    }
  },
  components: {
    Grid
  }
}
</script>

<style lang="scss">
</style>
