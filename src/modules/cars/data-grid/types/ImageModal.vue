<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content" v-images-loaded="imageLoaded">
      <p class="image">
        <img :src="src" v-show="imageLoadedControl">
      </p>
    </div>
    <button class="modal-close" @click="modalClose()"></button>
  </div>
</template>

<script>
import { methodsMixins } from '@/mixins/main'
import imagesLoaded from 'vue-images-loaded'

export default {
  name: 'ImageModal',
  mixins: [
    methodsMixins
  ],
  data () {
    return {
      imageLoadedControl: false
    }
  },
  mounted () {
    this.setLoading(true)
  },
  directives: {
    imagesLoaded
  },
  methods: {
    modalClose () {
      this.$emit('modal-close')
    },
    imageLoaded (instance) {
      console.log(instance)
      this.setLoading(false)
      this.imageLoadedControl = true
    }
  },
  props: [
    'src'
  ]
}
</script>

<style lang="css">
</style>
