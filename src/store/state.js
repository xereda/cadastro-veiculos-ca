import Schema from './schema'

export default {
  schema: Schema,
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
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: '111-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: '222-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: '333-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: '444-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: '555-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: '666-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: '777-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: '888-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: '999-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: 'A11-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: 'A22-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: 'A33-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: 'A44-5498',
      value: '20000'
    },
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'fiat',
      model: 'Gol',
      plate: 'FFF-5498',
      value: '20000'
    },
    {
      fuelType: 'Gasolina',
      image: null,
      manufacturer: 'renault',
      model: 'Fox',
      plate: 'FOX-4125',
      value: '20000'
    },
    {
      fuelType: 'Alcool',
      image: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
      manufacturer: 'vw',
      model: 'Fusca',
      plate: 'PAI-4121',
      value: '20000'
    }
  ]
}
