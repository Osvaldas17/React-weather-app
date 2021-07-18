import React from 'react'

const weatherIcons = {
    'clear': ['1', '33'],
    'isolated-clouds': ['2', '34'],
    'scattered-clouds': ['3', '36'],
    'overcast': ['7', '38'],
    'light-rain': ['14', '39'],
    'moderate-rain': ['12', '40'],
    'heavy-rain': ['18', '18'],
    'sleet': ['25', '25'],
    'light-snow': ['21', '43'],
    'moderate-snow': ['19', '44'],
    'heavy-snow': ['22', '44'],
    'fog': ['11', '37'],
    'na': ['33', '33'],
}

export default function weatherIconsSwitch(conditionCode, forecastTimeUtc) {
    if (forecastTimeUtc) {
        const timeOfDay = forecastTimeUtc.slice(11, 13)
        const day = (timeOfDay < 21 && timeOfDay > 6)
        return `https://www.accuweather.com/images/weathericons/${weatherIcons[conditionCode][day ? 0 : 1]}.svg`
    } else return `https://www.accuweather.com/images/weathericons/${weatherIcons[conditionCode][0]}.svg`
}