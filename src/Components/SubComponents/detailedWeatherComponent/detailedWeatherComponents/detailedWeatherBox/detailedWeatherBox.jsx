import React from 'react'
import weatherIconsSwitch from "../../../weatherIcons/weatherIcons";
import {useHistory ,useParams} from "react-router-dom";

export default function DetailedWeatherBox({forecastNow,cityName}) {

    const history = useHistory()
    const {CityCode,Division } = useParams()
    const {windSpeed,windGust,conditionCode,airTemperature,relativeHumidity,cloudCover} = forecastNow

    const moveToHourly = (CityCode, Division) => {
        history.push(`/AdministrativeDivisionComponent/${Division}/${CityCode}/Hourly`)
    };

    return (
        <div
            onClick={() => moveToHourly(CityCode,Division)}
            className='detailedWeatherCompContainer'>
            <div className='detailedCompSubCon'>
                <h2>{cityName}</h2>
                <div className='tempSizeL'>{airTemperature.toFixed(0)} °C</div>
                <div>{conditionCode}</div>
            </div>
            <div className='detailedCompSubCon'>
                <img className='weatherIconMed' src={weatherIconsSwitch(conditionCode,forecastNow.forecastTimeUtc)}/>
            </div>
            <div className='detailedCompSubCon'>
                <div>Humidity  {relativeHumidity} %</div>
                <div>Wind speed  {windSpeed} km/h</div>
                <div>Wind gust  {windGust} km/h</div>
                <div>Cloud Cover  {cloudCover} %</div>
            </div>
        </div>
    )
}