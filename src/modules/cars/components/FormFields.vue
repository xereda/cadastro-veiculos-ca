<template>
  <div class="">
    <div class="columns is-multiline">
      <div class="column">
        <div class="columns is-multiline">
          <div class="column">
            <div class="field">
              <label class="label">Placa *</label>
              <p class="control">
                <input :disabled="isUpdating" class="input" type="text" v-model="formFields.plate" @input="$v.formFields.plate.$touch()" v-mask="'AAA-9999'" placeholder="informe a placa">
              </p>
              <p v-show="isInvalidField('plate')" class="help is-danger">Placa é requerida</p>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <label class="label">Modelo *</label>
              <p class="control">
                <input class="input" type="text" v-model="formFields.model" @input="$v.formFields.model.$touch()" placeholder="informe o modelo">
              </p>
              <p v-show="isInvalidField('model')" class="help is-danger">Modelo é requerido</p>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column">
            <div class="field">
              <label class="label">Marca *</label>
              <p class="control">
                <span class="select">
                  <select v-model="formFields.manufacturer" @change="$v.formFields.manufacturer.$touch()">
                    <option value="">Selecione</option>
                    <option v-for="m in manufacturerList" :value="m.value">{{ m.label }}</option>
                  </select>
                </span>
              </p>
              <p v-show="isInvalidField('manufacturer')"  class="help is-danger">Marca é requerida</p>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <label class="label">Valor</label>
              <p class="control">
                <input class="input" type="text" v-model="formFields.value" v-mask="'money'" placeholder="informe o valor">
              </p>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column">
            <div class="field">
              <label class="label">Combustível</label>
              <p class="control">
                <label class="radio" v-for="fuel in fuelTypeList">
                  <input type="radio" :value="fuel.value" v-model="formFields.fuelType">
                  {{ fuel.label }}
                </label>
              </p>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column">
            <div class="field">
              <label class="label">Imagem</label>
              <p class="control">
                <input class="input" type="text" v-model="formFields.image" @input="$v.formFields.image.$touch()" placeholder="informe a url da imagem">
              </p>
              <p v-show="isInvalidField('image')" class="help is-danger">URL inválida</p>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column">
            <div class="field is-grouped">
              <p class="control">
                <button :disabled="!isValidSaveFormButton" :class="{ 'button': true, 'is-primary': true }" @click="saveForm()">Salvar</button>
              </p>
              <p class="control">
                <button class="button is-link" @click="goTo('cars')">Cancelar</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box" style="height:100%" v-images-loaded="imageLoaded">
          <p class="subtitle is-4">Imagem</p>
          <p class="image" v-show="imageLoadedControl">
            <img :src="formFields.image">
          </p>
          <p class="image" v-show="!imageLoadedControl">
            <img :src="config.images.defaultImagePreview">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computedMixins, methodsMixins } from '@/mixins/main'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, url, minLength, maxLength } from 'vuelidate/lib/validators'
Vue.use(Vuelidate)
import AwesomeMask from 'awesome-mask'
import imagesLoaded from 'vue-images-loaded'
import izitoast from 'izitoast'

export default {
  name: 'FormFields',
  mixins: [
    computedMixins,
    methodsMixins
  ],
  validations: {
    formFields: {
      plate: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(8)
      },
      model: { required },
      manufacturer: { required },
      image: { url }
    }
  },
  data () {
    return {
      imageLoadedControl: false,
      formFields: {
        manufacturer: '',
        plate: '',
        model: '',
        fuelType: '',
        image: '',
        value: ''
      }
    }
  },
  mounted () {
    if (this.isUpdating) {
      const _objCar = this.cars.filter(e => e.plate === this.$route.params.carId)[0]
      this.formFields.plate = _objCar.plate
      this.formFields.model = _objCar.model
      this.formFields.manufacturer = _objCar.manufacturer
      this.formFields.value = _objCar.value
      this.formFields.fuelType = _objCar.fuelType
      this.formFields.image = _objCar.image
    }
  },
  methods: {
    imageLoaded (instance) {
      this.imageLoadedControl = instance.images[0].isLoaded
    },
    isInvalidField (field) {
      if (!this.$v.formFields[field].$dirty) return false
      if (!this.$v.formFields[field].$invalid) return false
      return true
    },
    clearDataForm () {
      this.formFields.plate = ''
      this.formFields.model = ''
      this.formFields.manufacturer = ''
      this.formFields.value = ''
      this.formFields.fuelType = ''
      this.formFields.image = ''
      this.$v.formFields.$reset()
    },
    objectCloner () {
      return {
        plate: this.formFields.plate.toUpperCase(),
        model: this.formFields.model,
        manufacturer: this.formFields.manufacturer,
        value: this.formFields.value,
        fuelType: this.formFields.fuelType,
        image: this.formFields.image === '' ? null : this.formFields.image,
        selected: false
      }
    },
    createCar () {
      this.addCar(this.objectCloner())
      izitoast.info({
        title: 'OK',
        message: 'Veículo cadastrado com sucesso!',
        position: 'center'
      })
      this.clearDataForm()
    },
    updateCar () {
      this.changeCar(this.objectCloner())
      izitoast.info({
        title: 'OK',
        message: 'Veículo atualizado com sucesso!',
        position: 'center'
      })
    },
    saveForm () {
      this.$v.formFields.$touch()
      if (!this.$v.formFields.$invalid) {
        this.isCreating ? this.createCar() : this.updateCar()
      }
    }
  },
  computed: {
    isUpdating () {
      return this.$route.name !== 'newCar'
    },
    isCreating () {
      return this.$route.name === 'newCar'
    },
    manufacturerList () {
      return this.payloadForm.manufacturers
    },
    fuelTypeList () {
      return this.payloadForm.fuelTypes
    },
    isValidSaveFormButton () {
      if (!this.$v.formFields.$dirty) return true
      if (!this.$v.formFields.$invalid) return true
      return false
    }
  },
  directives: {
    'mask': AwesomeMask,
    imagesLoaded
  }
}
</script>

<style lang="css">
  @import '~izitoast/dist/css/iziToast.min.css'
</style>
