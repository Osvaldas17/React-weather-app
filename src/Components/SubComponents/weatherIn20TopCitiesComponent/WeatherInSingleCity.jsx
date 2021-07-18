import React from 'react'
import weatherIconsSwitch from "../weatherIcons/weatherIcons";


export default function WeatherInSingleCity({onClick,name,conditionCode,airTemperature,forecastTimeUtc}) {

    return (
        <div
            onClick={onClick}
            className='singleCitySomeInfo margin1'>
            <div className='padding8'>
                <h4>{name}</h4>
                <p className='margin-top-5'>{conditionCode}</p>
            </div>
            <div className='padding8 text-center'>
                <img
                    className='weatherIcon'
                    src={weatherIconsSwitch(conditionCode,forecastTimeUtc)}/>
                <div>
                    <p>{airTemperature} °C</p>
                </div>
            </div>
        </div>
    )
}