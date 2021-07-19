import React, {useEffect, useMemo, useState} from 'react'
import {
    Route, Switch,
} from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader"

import {useDispatch} from "react-redux";
import {actions} from "../Redux/actions";
import AdministrativeDivisionComponent from "./SubComponents/AdministrativeDivisionComponent";
import WeatherIn20TopCities from "./SubComponents/WeatherIn20TopCities";
import CitiesInsideAdministrationDivision from "./SubComponents/CitiesInsideAdministrationDivision";
import DetailedWeatherSingleCity from "./SubComponents/detailedWeatherComponent/DetailedWeatherSingleCity";
import api from '../api';


export default function MainComponent() {

    const {setAllLocationsList} = actions
    const dispatch = useDispatch()
    const [loadingState, setLoadingState] = useState(true)
    useEffect(() => {
        setLoadingState(true)
        fetch(api.places())
            .then(res => res.json())
            .then(data => {
                let lithuanianCities = data.filter((e) => e.countryCode === 'LT')
                dispatch(setAllLocationsList(lithuanianCities))
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => setLoadingState(false))
    }, [])

    if (loadingState) {
        return (
            <div className='loader'>
                <MoonLoader color={`rgb(40, 44, 52)`} size={80}/>
            </div>
        );
    }

    return (
        <Switch>
            <Route path="/AdministrativeDivisionComponent/:Division/:CityCode">
                <DetailedWeatherSingleCity/>
            </Route>
            <Route path="/AdministrativeDivisionComponent/:Division">
                <CitiesInsideAdministrationDivision/>
            </Route>
            <Route path="/AdministrativeDivisionComponent">
                <AdministrativeDivisionComponent/>
            </Route>
            <Route path="/">
                <WeatherIn20TopCities/>
            </Route>
        </Switch>
    )
}