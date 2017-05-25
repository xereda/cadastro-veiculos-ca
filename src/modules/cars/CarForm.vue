<template>
  <div class="" id="car-detail">
    <breadcrumbs :objectLinks="breadcrumbsLinks"></breadcrumbs>
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
    <hr>
    <form-fields></form-fields>
  </div>
</template>

<script>
import jump from 'jump.js'
import { methodsMixins, computedMixins } from '@/mixins/main'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import FormFields from './components/FormFields.vue'

export default {
  data () {
    return {
      breadcrumbsLinks: [
        { go: -1, name: 'Veículos', activedLink: true },
        { name: this.$route.name === 'newCar' ? 'Novo' : 'Detalhes', activedLink: false }
      ]
    }
  },
  mixins: [
    methodsMixins,
    computedMixins
  ],
  mounted () {
    jump('#top')
  },
  computed: {
    title () {
      return this.$route.name === 'newCar' ? 'Novo veículo' : 'Alterando um veículo'
    },
    subtitle () {
      return 'Cadastro de veículos'
    }
  },
  components: {
    Breadcrumbs,
    FormFields
  }
}
</script>

<style lang="scss">
</style>
