<template>
  <div class="">
    <figure class="image">
      <img :src="image" class="custom-image">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'Manufacturer',
  props: [
    'manufacturer'
  ],
  computed: {
    image () {
      return '../static/images/manufacturer/' + this.manufacturer + '.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
  .custom-image {
    height: 20px;
    max-width: 40px;
  }
</style>
