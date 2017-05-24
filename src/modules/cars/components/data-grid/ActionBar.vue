<template>
  <nav class="level">
    <div class="level-left" style="margin-bottom:20px;">
      <div class="level-item">
        <div class="field">
            <a class="button is-success" @click="goTo('newCar')">
              <span class="icon is-small">
                <i class="fa fa-file-o"></i>
              </span>
              <span class="is-hidden-mobile">Novo carro</span>
              <span class="is-hidden-tablet">Novo</span>
            </a>
            <a class="button is-danger" @click="remove()" v-if="selectedsCars.length > 0">>
              <span class="icon is-small">
                <i class="fa fa-trash-o"></i>
              </span>
              <span>Excluir</span>
            </a>
            <a class="button is-warning is-hidden-mobile" @click="clear()" v-if="selectedsCars.length > 0">>
              <span class="icon is-small">
                <i class="fa fa-eraser"></i>
              </span>
              <span class="">Limpar</span>
            </a>
            <a class="button is-warning is-hidden-tablet" @click="clear()" v-if="selectedsCars.length > 0">>
              <span class="icon is-small">
                <i class="fa fa-eraser"></i>
              </span>
            </a>
        </div>
      </div>
    </div>

    <!-- Right side -->
    <div class="level-right" v-show="textFilter.length > 0">
      <div class="level-item">
        <span class="tag is-warning is-medium">
          {{ textFilter }}
          <button class="delete is-small" @click="clearFilter()"></button>
        </span>
      </div>
    </div>
    <div class="level-right" v-show="textFilter.length === 0">
      <div class="level-item is-hidden-mobile">
        <p class="subtitle is-5">
          <strong>{{ cars.length }}</strong> carros
        </p>
      </div>
      <div class="level-item">
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="text" @keyup.enter="setFilter()" v-model="filter" placeholder="Localize um carro">
          </p>
          <p class="control">
            <button class="button" @click="setFilter()">
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
  data () {
    return {
      filter: ''
    }
  },
  methods: {
    remove () {
      this.showDialog(true)
    },
    clear () {
      this.clearSelection()
    },
    clearFilter () {
      this.filter = ''
      this.setFilter()
    },
    setFilter () {
      this.setTextFilter(this.filter)
    }
  }
}
</script>

<style lang="css">
</style>
