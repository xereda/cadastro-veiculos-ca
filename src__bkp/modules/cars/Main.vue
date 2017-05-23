<template>
  <div class="">
    {{ selectedCars }}
    <data-grid :schema="schema"
               :data="cars"
               :current-pag="currentPag"
               :page-limite="config.limitePerPage"
               :selecteds="selectedCars"
               field-index="plate"
               @select-all="selectAll"
               @deselect-all="deselectAll"
               @select-one="selectOne"
               @deselect-one="deselectOne"></data-grid>
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
      selectedCars: []
    }
  },
  methods: {
    selectAll () {
      console.log('selectAll do Main.vue: ')
      this.cars.slice((this.currentPag - 1) * this.config.limitePerPage, this.currentPag * this.config.limitePerPage)
      .map(e => e.plate)
      .forEach(p => {
        this.selectedCars.push(p)
      })
    },
    deselectAll () {
      console.log('deselectAll do Main.vue: ')
      this.cars.slice((this.currentPag - 1) * this.config.limitePerPage, this.currentPag * this.config.limitePerPage)
      .map(e => e.plate)
      .forEach(p => {
        this.deselectOne(p)
      })
    },
    selectOne (index) {
      console.log('selectOne da Main.vue: ', index)
      this.deselectOne(index)
      this.selectedCars.push(index)
    },
    deselectOne (index) {
      console.log('deselectOne da Main.vue: ', index)
      const i = this.selectedCars.indexOf(index)
      if (i !== -1) {
        this.selectedCars.splice(i, 1)
      }
    },
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
