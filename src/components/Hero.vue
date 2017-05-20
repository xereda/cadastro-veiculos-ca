<template>
  <transition name="fade">
    <section class="hero is-small is-info is-bold">
      <div class="hero-body custom-margin-left" id="home">
        <div class="container">
          <h1 class="title">
            CA Fleet System
          </h1>
          <h2 class="subtitle">
            Test developed by <a @click="$router.push({ name: 'about' })"><strong>@xereda</strong></a>.
          </h2>
        </div>
      </div>
      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot custom-margin-left">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <li :class="{ 'is-active': true }" @click="goTo('cars')"><a>Cars</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </transition>
</template>

<script>
import { methodsMixins, computedMixins } from '@/mixins/main'
import { mapGetters } from 'vuex'
export default {
  name: 'Hero',
  mixins: [
    methodsMixins,
    computedMixins
  ],
  methods: {
    updateViewMode (size) {
      console.log('rota: ', this.$route)
      if (this.$route.name !== 'beers') this.$router.push({ name: 'beers' })
      this.updateStateView(size)
      setTimeout(() => {
        this.setScrollPosition()
      }, 10)
    }
  },
  computed: {
    ...mapGetters([
      'isSmallView',
      'isLargeView'
    ])
  }
}
</script>

<style lang="css">
  .logo-hero {
    width: 150px;
  }
  .custom-margin-left {
    margin-left: 20px;
  }
</style>
