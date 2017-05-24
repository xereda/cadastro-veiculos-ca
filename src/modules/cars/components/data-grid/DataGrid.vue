<template>
  <div class="">
    <table class="table">
      <grid-header></grid-header>
      <grid-body></grid-body>
    </table>
    <transition name="fade">
      <dialog-teste v-show="dialog"></dialog-teste>
    </transition>
  </div>
</template>

<script>
import { computedMixins } from '@/mixins/main'
import DialogTeste from '../Dialog.vue'
import GridHeader from './Header.vue'
import GridBody from './Body.vue'

export default {
  name: 'Grid',
  mixins: [
    computedMixins
  ],
  methods: {
  },
  components: {
    GridHeader,
    GridBody,
    DialogTeste
  }
}
</script>

<style lang="css">
</style>
