import { clientFetch } from '../clientFetch'

export const getFavoritePlaces = async () => {
  return await clientFetch.get('/points')
}

export const addPlaceToFavorite = async (body) => {
  return await clientFetch.post('/points', body)
}

export const removePlaceFromFavorite = async (id) => {
  return await clientFetch.delete(`/points/${id}`)
}

export const updatePlaceInFavorite = async (id, body) => {
  return await clientFetch.put(`/points/${id}`, body)
}
