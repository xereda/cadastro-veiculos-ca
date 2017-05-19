<template>
  <div class="content is-small">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Foto</th>
          <th>Combustível</th>
          <th>Valor</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car, index) in cars">
          <td></td>
          <td>{{ car.plate }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.manufacturer }}</td>
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
    </table>
  </div>
</template>

<script>
import { methodsMixins, computedMixins } from '@/mixins/main'

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
  }
}
</script>

<style lang="scss">
</style>
