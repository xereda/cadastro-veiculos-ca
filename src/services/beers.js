import Http from './http'

export const getAllPaged = (page = 0, limitePerPage = 20, extraParams = {}) => {
  const params = {
    page,
    'per_page': limitePerPage,
    ...extraParams
  }
  return Http.get('/beers', { params })
}

export const getBeer = (beerId) => {
  const params = {
  }
  return Http.get('/beers/' + beerId, { params })
}
