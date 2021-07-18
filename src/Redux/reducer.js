import { types } from './consts'

export const localAdministrationsReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case types.SET_LOCAL_ADMINISTRATION:
            return payload
        default:
            return state
    }
}

export const allLocationsReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case types.SET_ALL_LOCATIONS:
            return payload
        default:
            return state
    }
}

export const citiesInsideDivisionReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case types.SET_CITIES_INSIDE_DIVISION:
            return payload
        default:
            return state
    }
}

export const topCitiesReducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case types.SET_TOP_CITIES:
            return payload
        default:
            return state
    }
}
