
import { combineReducers } from 'redux'
import {allLocationsReducer,localAdministrationsReducer,topCitiesReducer,citiesInsideDivisionReducer} from "./reducer";

export const RootReducer = combineReducers({
    allLocations: allLocationsReducer,
    localAdministrations: localAdministrationsReducer,
    topCities: topCitiesReducer,
    citiesInsideDivision: citiesInsideDivisionReducer,
})