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
import { mapGetters } from 'vuex'
import FloatingButton from './FloatingButton.vue'
import Loading from './Loading.vue'

export default {
  name: 'Body',
  components: {
    Loading,
    FloatingButton
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
