export const BASE_URL = 'https://simutis.dev/api/meteo-proxy'

const api = {
  places: () => `${BASE_URL}/places`,
  longTermName: (name) => `${BASE_URL}/places/${name}/forecasts/long-term`,
  longTermCode: (code) => `${BASE_URL}/places/${code}/forecasts/long-term`
}

export default api;