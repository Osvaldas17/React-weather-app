import React from 'react'
import DetailedWeatherBox from "./detailedWeatherBox/detailedWeatherBox";
import {dateObj} from "../../FormatedDateComponents/DateComponent";

export default function WeatherNow({cityForecast}) {

    const {dateTomorrow,dateToday,timeNowRounded} = dateObj
    const {forecastTimestamps,place: {name}} = cityForecast

    const todayForecasts = forecastTimestamps.filter(x => x.forecastTimeUtc.slice(0,10) === dateToday)
    const tomorrowForecasts = forecastTimestamps.filter(x => x.forecastTimeUtc.slice(0, 10) === dateTomorrow)
    const forecastNow = forecastTimestamps.find(x => x.forecastTimeUtc === timeNowRounded)

    function maxTemp(forecastDay) {
        return  forecastDay.reduce((a, b) => a.airTemperature > b.airTemperature ? a : b);
    }
    function minTemp(forecastDay) {
        return  forecastDay.reduce((a, b) => a.airTemperature < b.airTemperature ? a : b);
    }


    return (
        <div className='width-100'>
            <div className='marginBot10 d-flex'>
                <h2 className='textColor1 borderBot1 padding10'>Weather Now</h2>
            </div>
            <DetailedWeatherBox forecastNow={forecastNow} cityName={name}/>

            <div className='marginBot10 d-flex'>
                <h2 className='textColor1 borderBot1 padding10'>Weather Tonight</h2>
            </div>
            <DetailedWeatherBox forecastNow={minTemp(todayForecasts)} cityName={name}/>
            <div className='marginBot10 d-flex'>
                <h2 className='textColor1 borderBot1 padding10'>Weather Tomorrow</h2>
            </div>
            <DetailedWeatherBox forecastNow={maxTemp(tomorrowForecasts)} cityName={name} />
            <div className='marginBot10 d-flex'>
                <h2 className='textColor1 borderBot1 padding10'>Weather Tomorrow Night</h2>
            </div>
            <DetailedWeatherBox forecastNow={minTemp(tomorrowForecasts)} cityName={name} />
        </div>
    )
}