<template>
  <!-- Main container -->
  <nav class="level">
    <!-- Left side -->
    <div class="level-left">
      <div class="level-item"><a class="button is-success">Novo carro</a></div>
      <div class="level-item" v-if="selectedsCars.length > 0"><a class="button is-danger" @click="remove()">Excluir</a></div>
      <div class="level-item" v-if="selectedsCars.length > 0"><a class="button is-warning" @click="clear()">Limpar</a></div>
    </div>

    <!-- Right side -->
    <div class="level-right">
      <div class="level-item">
        <p class="subtitle is-5">
          <strong>{{ cars.length }}</strong> carros
        </p>
      </div>
      <div class="level-item">
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="text" placeholder="Localize um carro">
          </p>
          <p class="control">
            <button class="button">
              Filtrar
            </button>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { methodsMixins, computedMixins } from '@/mixins/main'

export default {
  name: 'GridActionBar',
  mixins: [
    methodsMixins,
    computedMixins
  ],
  methods: {
    remove () {
      console.log('remove cars')
      this.showDialog(true)
    },
    clear () {
      console.log('limpa a selecao')
      this.clearSelection()
    }
  }
}
</script>

<style lang="css">
</style>
