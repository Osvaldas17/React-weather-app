import React, {useState} from 'react'
import weatherIconsSwitch from "../../../weatherIcons/weatherIcons";

export default function DailyWeatherComp({day, e: {days, ...e}}) {
    const [collapse, setCollapse] = useState(true)

    const mostlyWeatherCondition = Object.keys(e.conditionCodeFrequency).reduce((a, b) => e[a] > e[b] ? a : b)

    return (
        <div
            className="dailyCompWrapperSub"
            onClick={() => setCollapse(!collapse)}>
            <div
                key={day}
                className='simpleDailyDiv'>
                <div className="width-25">
                    <p className="font-size-15">Day / Night</p>
                    <p className="font-size-30">{e.maxTemp.toFixed(0)} / {e.minTemp.toFixed(0)} °C</p>

                </div>
                <p className="width-25 displayNone750 font-size-20">{mostlyWeatherCondition}</p>
                <p className="font-size-15">{day.slice(5)}</p>
                <div>
                    <img className="weatherIcon padding10" src={weatherIconsSwitch(mostlyWeatherCondition)}/>
                    <i
                        style={{
                            color: collapse ? "white" : "rgb(89,149,183)"
                        }}
                        className="fas fa-mouse font-size-15 margin4"/>
                    <span className="font-size-15">{collapse ? 'Open' : 'Close'}</span>
                </div>
            </div>
            <div
                className="extraDataDaily"
                style={{
                    maxHeight: collapse ? "0" : "3000px"
                }}
            >
                {days.map(({
                               airTemperature,
                               conditionCode,
                               cloudCover,
                               forecastTimeUtc,
                               relativeHumidity,
                               windGust,
                               windSpeed
                           }) =>
                    <div
                        key={forecastTimeUtc}
                        className="extraDataDailySub">
                        <div className="d-flex width-25 flex-direction-column-500">
                            <div>
                                <div>{airTemperature} °C</div>
                                <div>{conditionCode}</div>
                            </div>
                            <div>
                                <img className="weatherIcon padding10" src={weatherIconsSwitch(conditionCode,forecastTimeUtc)}/>
                            </div>
                        </div>
                        <div className="width-25">
                            <div>Humidity: {relativeHumidity} %</div>
                            <div>Cloud cover: {cloudCover} %</div>
                            <div>Wind gusts: {windGust} km/h</div>
                            <div>Wind speed: {windSpeed} km/h</div>
                        </div>
                        <div>{forecastTimeUtc.split(' ')[1]}</div>
                    </div>)}
            </div>
        </div>
    )
}


// airTemperature: 32.5
// cloudCover: 0
// conditionCode: "clear"
// conditionCodeFrequency: {clear: 10}
// conditionCodeTop: "clear"
// forecastTimeUtc: "2021-07-15 14:00:00"
// maxTemp: 32.6
// minTemp: 24.6
// relativeHumidity: 29
// seaLevelPressure: 1012
// totalPrecipitation: 0
// windDirection: 61
// windGust: 5
// windSpeed: 1