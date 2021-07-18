import { types } from './consts'

const setLocalAdministrationList = (payload = []) => ({
    type: types.SET_LOCAL_ADMINISTRATION,
    payload,
})
const setAllLocationsList = (payload = []) => ({
    type: types.SET_ALL_LOCATIONS,
    payload,
})
const setTopCities = (payload = []) => ({
    type: types.SET_TOP_CITIES,
    payload,
})
const setCitiesInsideDivision = (payload = []) => ({
    type: types.SET_CITIES_INSIDE_DIVISION,
    payload,
})

export const actions = {
    setLocalAdministrationList,
    setAllLocationsList,
    setTopCities,
    setCitiesInsideDivision
}