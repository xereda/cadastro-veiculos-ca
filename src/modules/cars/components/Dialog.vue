<template>
  <div :class="{ 'modal': true, 'is-active': dialog }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Excluindo carros</p>
        <button class="delete" @click="showDialog(false)"></button>
      </header>
      <section class="modal-card-body">
        <h4 class="subtitle is-4" v-if="selectedsCars.length > 1">Tem certeza que deseja remover os <strong>{{ selectedsCars.length }}</strong> carros selecionados?</h4>
        <h4 class="subtitle is-4" v-else>Tem certeza que deseja remover o carro selecionado?</h4>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-danger" @click="remove()">Excluir</a>
        <a class="button" @click="showDialog(false)">Cancelar</a>
      </footer>
    </div>
  </div>
</template>

<script>
import { methodsMixins, computedMixins } from '@/mixins/main'
export default {
  name: 'Dialog',
  mixins: [
    computedMixins,
    methodsMixins
  ],
  methods: {
    remove () {
      this.showDialog(false)
      this.removeCars()
    }
  }
}
</script>

<style lang="css">
</style>
