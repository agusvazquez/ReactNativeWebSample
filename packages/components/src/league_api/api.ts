import { create } from 'apisauce'

export const HOST = 'https://ddragon.leagueoflegends.com/'
export const LOL_VERSION = '11.10.1'

const api = create({
  baseURL: `${HOST}cdn/${LOL_VERSION}/data/en_US/`,
})

export default api
