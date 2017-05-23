<template>
  <thead>
    <!-- {{ selectedsCars.length }} -->
    <!-- {{ allCarsSelectedsInPage }} -->
    <tr>
      <th class="checkbox-column">
        <input type="checkbox" class="checkbox custom-checkbox" v-model="selected" @click="selectAll($event.target.checked)" />
      </th>
      <th>Placa</th>
      <th>Modelo</th>
      <th class="is-hidden-mobile">Marca</th>
      <th class="is-hidden-mobile">Foto</th>
      <th class="is-hidden-mobile">Combustível</th>
      <th class="is-hidden-mobile">Valor</th>
      <th class="zoom-column"></th>
    </tr>
  </thead>
</template>

<script>
import { computedMixins, methodsMixins } from '@/mixins/main'

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
  watch: {
    allCarsSelectedsInPage (val) {
      this.selected = val
    }
  }
}
</script>

<style lang="scss">
  @import '../../../scss/config.scss';

  .checkbox-column, .zoom-column {
    width: 20px !important;
  }

  table tr th {
    font-size: .9em;
  }

</style>
