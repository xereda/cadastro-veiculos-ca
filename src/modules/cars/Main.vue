<template>
  <div class="">
    <data-grid :schema="schema"
               :data="cars"
               :current-pag="currentPag"
               :page-limite="config.limitePerPage"></data-grid>
    <pagination :total="cars.length"
                :current-pag="currentPag"
                :page-limite="config.limitePerPage"
                @set-current-pag="setCurrentPag"
                is-loading="false"></pagination>
  </div>
</template>

<script>
import { methodsMixins, computedMixins } from '@/mixins/main'
import DataGrid from '@/components/data-grid/DataGrid.vue'
import Pagination from '@/components/data-grid/Pagination.vue'

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
    DataGrid,
    Pagination
  }
}
</script>

<style lang="scss">
</style>
