<template>
  <tbody>
    <!-- <pre>qt nesta pagina: {{ paginatedData.length }}</pre> -->
    <tr v-for="(car, index) in paginatedData">
      <td>
        <input type="checkbox" class="checkbox custom-checkbox" v-model="car.selected" @change="selectOne(car)">
      </td>
      <td>
        <text-value :value="car.plate"></text-value>
      </td>
      <td>
        <text-value :value="car.model"></text-value>
      </td>
      <td class="is-hidden-mobile">
        <image-brand :value="car.manufacturer"></image-brand>
      </td>
      <td class="is-hidden-mobile">
        <thumbnail :value="car.image"
                   link-open-label="Imagem"
                   link-null-label="Sem imagem"></thumbnail>
      </td>
      <td class="is-hidden-mobile">
        <text-value :value="car.fuelType"></text-value>
      </td>
      <td class="is-hidden-mobile">
        <monetary :value="car.value"></monetary>
      </td>
      <td class="zoom-column">
        <a class="button is-small" @click="openDetail(111)">
          <span class="icon is-small">
            <i class="fa fa-search super"></i>
          </span>
        </a>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { computedMixins, methodsMixins } from '@/mixins/main'
import TextValue from './types/TextValue.vue'
import ImageBrand from './types/ImageBrand.vue'
import Thumbnail from './types/Thumbnail.vue'
import Monetary from './types/Monetary.vue'

export default {
  name: 'GridBody',
  mixins: [
    computedMixins,
    methodsMixins
  ],
  data () {
    return {
    }
  },
  methods: {
    selectOne (car) {
      car.selected ? this.selectCar(car.plate) : this.deselectCar(car.plate)
    }
  },
  watch: {
    paginatedData (val) {
      if (val.length === 0) this.setCurrentPag(1)
    }
  },
  components: {
    ImageBrand,
    TextValue,
    Thumbnail,
    Monetary
  }
}
</script>

<style lang="scss">

  table tr td {
    font-size: .88em;
  }

</style>
