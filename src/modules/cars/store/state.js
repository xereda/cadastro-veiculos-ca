export default {
  states: {
    loading: false,
    currentPag: 1,
    dialog: false,
    filter: '',
    sort: {
      column: '',
      asc: false
    }
  },
  payloadForm: {
    manufacturers: [
      { value: 'citroen', label: 'Citroel' },
      { value: 'chevrolet', label: 'Chevrolet' },
      { value: 'fiat', label: 'Fiat' },
      { value: 'ford', label: 'Ford' },
      { value: 'honda', label: 'Honda' },
      { value: 'renault', label: 'Renault' },
      { value: 'volkswagen', label: 'Volkswagen' }
    ],
    fuelTypes: [
      { value: 'Gasolina', label: 'Gasolina' },
      { value: 'Flex', label: 'Flex' },
      { value: 'Álcool', label: 'Álcool' },
      { value: 'Diesel', label: 'Diesel' },
      { value: 'Híbrido', label: 'Híbrido' }
    ]
  },
  cars: [
    {
      fuelType: 'Flex',
      image: null,
      manufacturer: 'volkswagen',
      model: 'Gol',
      plate: 'FFF-5498',
      value: '20.000,00',
      selected: false
    },
    {
      fuelType: 'Gasolina',
      image: null,
      manufacturer: 'volkswagen',
      model: 'Fox',
      plate: 'FOX-4125',
      value: '20.000,00',
      selected: false
    },
    {
      fuelType: 'Álcool',
      image: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
      manufacturer: 'volkswagen',
      model: 'Fusca',
      plate: 'PAI-4121',
      value: '20.000,00',
      selected: false
    }
  ]
}
