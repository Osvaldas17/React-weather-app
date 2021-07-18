import React, {useEffect, useMemo, useState} from 'react';
import {Line, Chart} from 'react-chartjs-2';
import weatherIconsSwitch from "../../../weatherIcons/weatherIcons";

const HourlyWeatherChartComp = ({todayOrTomorrow, name, forecasts}) => {

    const newData = useMemo(() => forecasts.map((value) => {
        return {
            y: value.airTemperature,
            x: value.forecastTimeUtc.slice(10, 19),
        };
    }), [forecasts])

    const genData = () => ({
            datasets: [
                {
                    type: 'line',
                    borderColor: [`#3e4351`],
                    pointRadius: 20,
                    borderWidth: 1,
                    hitRadius: 10,
                    hoverRadius: 10,
                    tension: 0.1,
                    backgroundColor: 'white',
                    fill: true,
                    pointStyle: forecasts.map((value) => {
                        const image = new Image(40, 40)
                        image.src = weatherIconsSwitch(value.conditionCode, value.forecastTimeUtc)
                        return image;
                    }),
                    data: newData,
                }],
        }
    );


    const [data, setData] = useState(genData());

    useEffect(() => {
        const interval = setInterval(() => setData(genData()), 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='CharHeader margin20'>
                <div className='borderBot1 d-flex'>
                    <h1 className='title text-center'>{name}</h1>
                    <h1 className='title text-center'>{todayOrTomorrow}</h1>
                </div>
            </div>
            <Line
                type='scatter'
                data={data}
                options={{
                    elements: {
                        bar: {
                            borderWidth: 2,
                        },
                    },
                    animations: {
                        tension: {
                            duration: 1500,
                            easing: 'linear',
                            from: 0.4,
                            to: 0.1,
                            loop: true
                        }
                    },
                    responsive: true,
                    plugins: {
                        legend: false,
                        tooltip: {
                            displayColors: false,
                            borderColor: 'rgb(102,104,107)',
                            backgroundColor: '#3e4351',
                            borderWidth: 5,
                            padding: 10,

                            callbacks: {
                                label: function (tooltipItems, data) {
                                    const [{
                                        conditionCode,
                                        relativeHumidity,
                                        totalPrecipitation,
                                        windGust,
                                        windSpeed,
                                        airTemperature
                                    }] = forecasts.filter((e) => e.forecastTimeUtc.slice(10, 19) === tooltipItems.label);
                                    return [
                                        airTemperature + ' °C',
                                        'Condition:  ' + conditionCode,
                                        'Humidity:  ' + relativeHumidity + ' %',
                                        'Precipitation:  ' + totalPrecipitation,
                                        'windSpeed:  ' + windSpeed + ' km/h',
                                        'windGust:  ' + windGust + ' km/h',]
                                }
                            }
                        }
                    },
                }}
            />
        </>
    );
}
;

export default HourlyWeatherChartComp;