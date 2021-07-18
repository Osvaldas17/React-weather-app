import React from 'react'
import weatherIconsSwitch from "../../../weatherIcons/weatherIcons";


export default function HourlyWeatherMobileComponent({forecasts}) {

    const {windSpeed, windGust, conditionCode, airTemperature, relativeHumidity, cloudCover,forecastTimeUtc} = forecasts

    return (
        <div className='hourlyMobileComp'>
            <div className='tempIconMobileCon'>
                <div className='padding10Sm5'>
                    <div>{airTemperature.toFixed(0)} °C</div>
                </div>
                <div className='padding10Sm5'>
                    <img className='weatherIconSm' src={weatherIconsSwitch(conditionCode, forecasts.forecastTimeUtc)}/>
                </div>
                <div className='padding10Sm5'>
                    <div>{conditionCode}</div>
                </div>
            </div>
            <div className='padding10Sm5'>
                <div>{forecastTimeUtc.slice(10, 19)}</div>
            </div>
        </div>
    )
}