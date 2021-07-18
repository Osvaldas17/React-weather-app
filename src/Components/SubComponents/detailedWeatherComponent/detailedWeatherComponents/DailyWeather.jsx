import React from 'react'
import DailyWeatherComp from "./dailyWeatherComp/DailyWeatherComp";

export default function DailyWeather({cityForecast: {forecastTimestamps, place: {name}}}) {

    const parsedData = {}

    console.log(parsedData)
    for (let i = 0; i < forecastTimestamps.length; i++) {
        const item = forecastTimestamps[i]
        const {forecastTimeUtc, airTemperature, conditionCode} = item
        const key = forecastTimeUtc.split(' ')[0]
        if (!parsedData[key]) {
            parsedData[key] = {
                days: [item],
                maxTemp: airTemperature,
                minTemp: airTemperature,
                conditionCodeFrequency: {
                    [conditionCode]: 1
                }
            }
        } else {
            const {minTemp, maxTemp, conditionCodeFrequency} = parsedData[key]
            parsedData[key].days.push(item)
            if (minTemp > airTemperature) {
                parsedData[key].minTemp = airTemperature
            }
            if (maxTemp < airTemperature) {
                parsedData[key].maxTemp = airTemperature
            }

            if (!conditionCodeFrequency[conditionCode]) {
                conditionCodeFrequency[conditionCode] = 1
            } else {
                conditionCodeFrequency[conditionCode] += 1
            }
        }
    }

    return (
        <div className='width-100'>{Object.entries(parsedData).map(([key, e]) =>
            <div
                key={key}
                className='dailyCompWrapper'>
                <DailyWeatherComp day={key} e={e}/>
            </div>
        )}</div>
    )
}