import Vue from 'vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import BeerDetail from '@/modules/beers/BeerDetail.vue'

const breadcrumbsLinks = BeerDetail.data().breadcrumbsLinks

describe('src/components/Breadcrumbs.vue', () => {
  it('Verifica se o componente foi renderizado corretamente ', () => {
    const Constructor = Vue.extend(Breadcrumbs)
    const vm = new Constructor({ propsData: { objectLinks: breadcrumbsLinks } }).$mount()
    expect(vm.$el.querySelector('.main span').textContent)
      .to.have.string('Voce está em:')
  })
})

describe('src/components/Breadcrumbs.vue', () => {
  it('Verifica se as opções foram montadas corretamente ', () => {
    const Constructor = Vue.extend(Breadcrumbs)
    const vm = new Constructor({ propsData: { objectLinks: breadcrumbsLinks } }).$mount()
    expect(vm.$el.textContent.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, ' '))
      .to.have.string('Voce está em: ' + breadcrumbsLinks[0].name + ' / ' + breadcrumbsLinks[1].name)
  })
})

describe('src/components/Breadcrumbs.vue', () => {
  it('Valida o método isLast(), onde o parâmetro 999 não pode ser o último: ', () => {
    const Constructor = Vue.extend(Breadcrumbs)
    const vm = new Constructor({ propsData: { objectLinks: breadcrumbsLinks } }).$mount()
    expect(vm.isLast(9999999)).equal(false)
  })
})

describe('src/components/Breadcrumbs.vue', () => {
  it('Valida o método isLast(), onde sabemos que (breadcrumbsLinks.length - 1) trata do índice referente ao último elemento do Breadcrumbs: ', () => {
    const Constructor = Vue.extend(Breadcrumbs)
    const vm = new Constructor({ propsData: { objectLinks: breadcrumbsLinks } }).$mount()
    expect(vm.isLast(breadcrumbsLinks.length - 1)).equal(true)
  })
})
