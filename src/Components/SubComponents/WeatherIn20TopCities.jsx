import React, {useEffect, useState} from 'react'
import selectors from "../../Redux/selectors";
import WeatherInSingleCity from "./weatherIn20TopCitiesComponent/WeatherInSingleCity";
import {dateObj} from "./FormatedDateComponents/DateComponent";

import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../Redux/actions";
import {Link, useHistory} from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import api from '../../api';

export default function WeatherIn20TopCities() {

    const {setTopCities} = actions
    const dispatch = useDispatch()
    const topCitiesState = useSelector(selectors.topCities)
    const [loadingState, setLoadingState] = useState(!topCitiesState.length)
    const history = useHistory()

    const {timeNowRounded} = dateObj

    console.log(timeNowRounded)

    const topCitiesNames = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys', 'Alytus', 'Marijampole',
        'Mazeikiai', 'Jonava', 'Utena', 'Kedainiai', 'Taurage', 'Telsiai', 'Ukmerge', 'Visaginas',
        'Plunge', 'Kretingale', 'Palanga', 'Radviliskis', 'Silute'
    ]

    useEffect(() => {
        if (!topCitiesState.length) {
            Promise.all(
                topCitiesNames.map((name) =>
                    fetch(api.longTermName(name))
                        .then(res => res.json())
                        .then(res => res)
                        .catch((e) => {
                            console.log(e)
                        })
                )
            ).then(res => {
                    dispatch(setTopCities(res))
                }
            ).finally(() => setLoadingState(false))
        }
    }, [])

    const pushToUrl = (CityCode, Division) => {
        history.push(`/AdministrativeDivisionComponent/${Division}/${CityCode}/now`)
    };

    if (loadingState) {
        return (
            <div className='loader'>
                <MoonLoader color={`rgb(40, 44, 52)`} size={80}/>
            </div>
        );
    }

    return (
        <div className='topPartWrapper'>
            <div className='width-100 clickForMoreCon'>
                <Link to="/AdministrativeDivisionComponent">
                    <div className='clickForMore'>Click for more >></div>
                </Link>
            </div>
            {topCitiesState.map((e) => {
                    const forecastNow = e.forecastTimestamps.find(x => x.forecastTimeUtc === timeNowRounded)
                    return (
                        < WeatherInSingleCity
                            key={e.place.name}
                            name={e.place.name}
                            conditionCode={forecastNow.conditionCode}
                            airTemperature={forecastNow.airTemperature}
                            forecastTimeUtc={forecastNow.forecastTimeUtc}
                            onClick={() => pushToUrl(e.place.code, e.place.administrativeDivision)}
                        />)
                }
            )
            }
        </div>
    )

}