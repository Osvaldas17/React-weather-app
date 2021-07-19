export const BASE_URL = 'https://api.meteo.lt/v1/'

const api = {
  places: () => '/places',
  longTermName: (name) => `${BASE_URL}/places/${name}/forecasts/long-term`,
  longTermCode: (code) => `${BASE_URL}/places/${code}/forecasts/long-term`
}

export default api;