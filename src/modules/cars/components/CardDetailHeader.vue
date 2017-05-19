<template>
  <div class="">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong class="beer-name">{{ beer.name }}</strong><br class="is-hidden-tablet"> - <span class="user-name">{{ beer.contributedBy }} (em {{ beer.date }})</span>
          </p>
        </div>
        <div class="content" v-show="showDescription || beer.description.length <= 200">
          <p>
            <span class="custom-description-html" v-html="beer.description"></span>
          </p>
        </div>
        <div class="content" v-show="beer.description.length > 200">
          <a class="button is-primary custom-button-show-description" @click="setShowDescription()">
            <span class="icon">
              <i :class="{ 'fa': true, 'fa-eye': !showDescription, 'fa fa-eye-slash': showDescription }"></i>
            </span>
            <span>{{ labelButton }}</span>
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'JmobCardDetailHeader',
  data () {
    return {
      showDescription: false
    }
  },
  methods: {
    setShowDescription () {
      this.showDescription = !this.showDescription
    }
  },
  computed: {
    labelButton () {
      if (this.showDescription) return 'ocultar descrição...'
      return 'mostrar descrição...'
    }
  },
  props: [
    'beer'
  ]
}
</script>

<style lang="scss">
  .user-name {
    font-style: italic;
    color: rgb(55, 187, 124);
  }
  .beer-name {
    font-size: 1.5em;
  }
  .custom-description-html {
    font-size: 90%;
  }
  .custom-button-show-description {
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
