export default {
  states: {
    loading: false,
    currentPag: 1
  },
  config: {
    limitePerPage: 5,
    images: {
      loading: '../../static/images/loading.gif',
      defaultImagePreview: 'static/images/backgroundImage.svg',
      logo: {
        header: 'static/images/header-logo.svg',
        footer: 'static/images/footer-logo.svg'
      }
    },
    urls: {
      linkedin: 'https://www.linkedin.com/in/xereda/',
      facebook: 'https://www.facebook.com/xereda',
      github: 'https://github.com/xereda',
      twitter: 'https://twitter.com/xereda'
    }
  },
  cars: [
    {
      combustivel: 'Flex',
      image: null,
      manufacturer: 'Volkswagem',
      model: 'Gol',
      plate: 'FFF-5498',
      value: '20000'
    },
    {
      fuelType: 'Gasolina',
      image: null,
      manufacturer: 'Volkswagem',
      model: 'Fox',
      plate: 'FOX-4125',
      value: '20000'
    },
    {
      fuelType: 'Alcool',
      image: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
      manufacturer: 'Volkswagen',
      model: 'Fusca',
      plate: 'PAI-4121',
      value: '20000'
    }
  ]
}
