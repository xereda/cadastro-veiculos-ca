<template>
  <div class="">
    <figure class="image">
      <img :src="image" class="custom-image">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'GridImageBrand',
  props: [
    'value'
  ],
  computed: {
    image () {
      return '../static/images/manufacturer/' + this.value + '.svg'
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
