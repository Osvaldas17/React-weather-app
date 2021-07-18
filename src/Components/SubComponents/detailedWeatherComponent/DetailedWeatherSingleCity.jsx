import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import WeatherNow from "./detailedWeatherComponents/weatherNow";
import {HourlyWeatherChart} from "./detailedWeatherComponents/HourlyWeatherChart";
import DailyWeather from "./detailedWeatherComponents/DailyWeather";
import {
    BrowserRouter as Router, Link, Route, Switch,
} from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";

export default function DetailedWeatherSingleCity() {

    const {CityCode, Division} = useParams()
    const [cityForecast, setCityForecast] = useState([])
    const [loadingState, setLoadingState] = useState(true)

    useEffect(() => {
        setLoadingState(true)
        fetch(`/places/${CityCode}/forecasts/long-term`)
            .then(res => res.json())
            .then(data => setCityForecast(data))
            .catch((e) => {
                console.log(e)
            })
            .finally(() => setLoadingState(false))
    }, [CityCode])

    if (loadingState) {
        return (
            <div className='loader'>
                <MoonLoader color={`rgb(40, 44, 52)`} size={80}/>
            </div>
        );
    }

    return (
        <Router>
            <div className='detailedWeatherWrapper'>
                <div className='timeStampLinksCon'>
                    <div>
                        <Link to={`/AdministrativeDivisionComponent/${Division}/${CityCode}/Now`}><p
                            className='timeStampLink'>Now</p></Link>
                    </div>
                    <div className='dividerY'/>
                    <div>
                        <Link to={`/AdministrativeDivisionComponent/${Division}/${CityCode}/Hourly`}><p
                            className='timeStampLink'>Hourly</p></Link>
                    </div>
                    <div className='dividerY'/>
                    <div>
                        <Link to={`/AdministrativeDivisionComponent/${Division}/${CityCode}/Daily`}><p
                            className='timeStampLink'>Daily</p></Link>
                    </div>
                </div>
                <Switch>
                    <Route path="/AdministrativeDivisionComponent/:Division/:CityCode/Daily">
                        <DailyWeather cityForecast={cityForecast}/>
                    </Route>
                    <Route path="/AdministrativeDivisionComponent/:Division/:CityCode/Hourly">
                        <HourlyWeatherChart cityForecast={cityForecast}/>
                    </Route>
                    <Route path="/AdministrativeDivisionComponent/:Division/:CityCode/Now">
                        <WeatherNow cityForecast={cityForecast}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}