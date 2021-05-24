import api, { HOST } from './api'

export const getChampionFullImage = (championId: string) => {
  return `${HOST}cdn/img/champion/loading/${championId}_0.jpg`
}

export const getChampions = () => {
  return api.get('/champion.json')
}

export const getChampionsDetail = (championId: string) => {
  return api.get(`/champion/${championId}.json`)
}
