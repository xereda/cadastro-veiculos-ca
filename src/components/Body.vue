<template>
  <section class="section">
    <div class="container">
      <loading v-show="loading"></loading>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <floating-button></floating-button>
    </div>
  </section>
</template>

<script>
import { computedMixins, methodsMixins } from '@/mixins/main'
import FloatingButton from './FloatingButton.vue'
import Loading from './Loading.vue'

export default {
  name: 'Body',
  mixins: [
    computedMixins,
    methodsMixins
  ],
  components: {
    Loading,
    FloatingButton
  }
}
</script>

<style lang="scss">
</style>
