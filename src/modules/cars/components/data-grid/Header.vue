<template>
  <thead>
    <tr class="is-unselectable">
      <th class="checkbox-column">
        <input type="checkbox" class="checkbox custom-checkbox" v-show="paginatedData.length > 0" v-model="selected" @click="selectAll($event.target.checked)" />
      </th>
      <th @click="sortColumn('plate')">Placa <sort-icon column-name="plate" :sort="sort"></sort-icon></th>
      <th @click="sortColumn('model')">Modelo <sort-icon column-name="model" :sort="sort"></sort-icon></th>
      <th @click="sortColumn('manufacturer')" class="is-hidden-mobile">Marca <sort-icon column-name="manufacturer" :sort="sort"></sort-icon></th>
      <th @click="sortColumn('image')" class="is-hidden-mobile">Foto <sort-icon column-name="image" :sort="sort"></sort-icon></th>
      <th @click="sortColumn('fuelType')" class="is-hidden-mobile">Combustível <sort-icon column-name="fuelType" :sort="sort"></sort-icon></th>
      <th @click="sortColumn('value')" class="is-hidden-mobile">Valor <sort-icon column-name="value" :sort="sort"></sort-icon></th>
      <th class="zoom-column"></th>
    </tr>
  </thead>
</template>

<script>
import { computedMixins, methodsMixins } from '@/mixins/main'
import SortIcon from './SortIcon.vue'

export default {
  name: 'GridHeader',
  mixins: [
    computedMixins,
    methodsMixins
  ],
  data () {
    return {
      selected: false
    }
  },
  methods: {
    selectAll (checked) {
      const _payload = { currentPag: this.currentPag, limitePerPage: this.config.limitePerPage }
      checked ? this.selectPagCars(_payload) : this.deselectPagCars(_payload)
    }
  },
  computed: {
  },
  components: {
    SortIcon
  },
  watch: {
    allCarsSelectedsInPage (val) {
      this.selected = val
    }
  }
}
</script>

<style lang="scss">
  @import '../../../../scss/config.scss';
  @import '~vue-directive-tooltip/css/index.min.css';

  .checkbox-column, .zoom-column {
    width: 20px !important;
  }

  table tr th {
    font-size: .9em;
    cursor: pointer;
  }


</style>
