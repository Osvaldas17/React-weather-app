import React from 'react';
import {dateObj} from "../../FormatedDateComponents/DateComponent";
import HourlyWeatherChartComp from "./HourlyWeatherChartComponent/HourlyWeatherChartComp";
import HourlyWeatherMobileComponent from "./HourlyWeatherChartComponent/HourlyWeatherMobileComponent";

export const HourlyWeatherChart = ({cityForecast: {forecastTimestamps, place: {name}}}) => {

    const {dateToday, dateTomorrow} = dateObj

    const todayForecasts = forecastTimestamps.filter(x => x.forecastTimeUtc.slice(0, 10) === dateToday)
    const tomorrowForecasts = forecastTimestamps.filter(x => x.forecastTimeUtc.slice(0, 10) === dateTomorrow)

    return (
        <div className='width-100'>
            <div className='chartWrapperDesktop'>
                <HourlyWeatherChartComp forecasts={todayForecasts} todayOrTomorrow={'Today'} name={name}/>
                <HourlyWeatherChartComp forecasts={tomorrowForecasts} todayOrTomorrow={'Tomorrow'} name={name}/>
            </div>
            <div className='chartWrapperMobile'>
                <div className='borderBot1 d-flex'>
                    <h1 className='title text-center'>{name}</h1>
                    <h1 className='title text-center'>Today</h1>
                </div>
                {todayForecasts.map((e) => <HourlyWeatherMobileComponent key={e.forecastTimeUtc} forecasts={e}/>)}
                <div className='borderBot1 d-flex'>
                    <h1 className='title text-center'>{name}</h1>
                    <h1 className='title text-center'>Tomorrow</h1>
                    <h1 className='title text-center'>Tomorrow</h1>
                </div>
                {tomorrowForecasts.map((e) => <HourlyWeatherMobileComponent key={e.forecastTimeUtc} forecasts={e}/>)}
            </div>
        </div>
    )
}


