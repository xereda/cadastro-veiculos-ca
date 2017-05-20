<template>
  <tbody>
    <tr v-for="(car, index) in cars">
      <td></td>
      <td>{{ car.plate }}</td>
      <td>{{ car.model }}</td>
      <td>
        <manufacturer :manufacturer="car.manufacturer"></manufacturer>
      </td>
      <td>{{ car.image ? 'Imagem' : 'Sem foto' }}</td>
      <td>{{ car.fuelType }}</td>
      <td>{{ car.value }}</td>
      <td>
        <a class="button is-small" @click="openDetail(car.id)">
          <span class="icon is-small">
            <i class="fa fa-search"></i>
          </span>
        </a>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapGetters } from 'vuex'
import Manufacturer from './Manufacturer.vue'

export default {
  name: 'GridBody',
  computed: {
    ...mapGetters([
      'cars'
    ])
  },
  components: {
    Manufacturer
  }
}
</script>

<style lang="css">
</style>
