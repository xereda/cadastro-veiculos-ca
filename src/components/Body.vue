<template>
  <section class="section">
    <div class="container is-fluid">
      <jmob-loading v-show="loading"></jmob-loading>
      <router-view></router-view>
      <jmob-floating-button></jmob-floating-button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import JmobFloatingButton from './FloatingButton.vue'
import JmobLoading from './Loading.vue'

export default {
  name: 'JmobBody',
  components: {
    JmobLoading,
    JmobFloatingButton
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

<style lang="css">
</style>
