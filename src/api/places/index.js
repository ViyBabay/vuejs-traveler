import { clientFetch } from '../clientFetch'

export const getFavoritePlaces = () => {
  return clientFetch.get('/points')
}

export const addPlaceToFavorite = (body) => {
  return clientFetch.post('/points', body)
}

export const removePlaceFromFavorite = (id) => {
  return clientFetch.delete(`/points/${id}`)
}

export const updatePlaceInFavorite = (id, body) => {
  return clientFetch.put(`/points/${id}`, body)
}
