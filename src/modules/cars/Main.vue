<template>
  <div class="">
    <action-bar></action-bar>
    <data-grid></data-grid>
    <pagination :total="cars.length"
                :current-pag="currentPag"
                :page-limite="config.limitePerPage"
                @set-current-pag="setCurrentPag"
                is-loading="false"></pagination>
  </div>
</template>

<script>
import { methodsMixins, computedMixins } from '@/mixins/main'
import DataGrid from './data-grid/DataGrid.vue'
import Pagination from './data-grid/Pagination.vue'
import ActionBar from './data-grid/ActionBar.vue'

export default {
  name: 'CarsList',
  mixins: [
    methodsMixins,
    computedMixins
  ],
  methods: {
    openDetail (carId) {
      this.$router.push({ name: 'carDetail', params: { carId: carId } })
    }
  },
  components: {
    DataGrid,
    Pagination,
    ActionBar
  }
}
</script>

<style lang="scss">

</style>
