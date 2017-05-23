export default {
  plate: {
    type: 'text',
    label: 'Placa'
  },
  model: {
    type: 'text',
    label: 'Modelo'
  },
  manufacturer: {
    type: 'image-brand',
    label: 'Marca'
  },
  image: {
    type: 'thumbnail',
    label: 'Imagem',
    link: {
      labels: {
        open: 'Imagem',
        null: 'Sem imagem'
      }
    }
  },
  fuelType: {
    type: 'text',
    label: 'Combustível'
  },
  value: {
    type: 'monetary',
    label: 'Valor'
  }
}
