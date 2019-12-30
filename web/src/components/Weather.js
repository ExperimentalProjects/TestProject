import React, { useEffect, useState } from 'react';
import { getWeather } from '../utils/api';

const loadWeatherDetails = (zipcode, setWeather) => {
    getWeather(zipcode).then(response => {
        setWeather(response)
    })
}


const Weather = (props) => {
    const [weather, setWeather] = useState({})
    useEffect(() => loadWeatherDetails(props.city, setWeather), [props.city])
    const { location, current_observation, forecasts } = weather;
    return (
        <div>
            {location && <div>
                {location.city}
            </div>
            }
            {current_observation && <div>
                {current_observation.astronomy.sunrise}
            </div>
            }
            {forecasts && <div>
                {forecasts.map(dayData => <div>{dayData.day} {dayData.text}</div>)}
            </div>
            }
        </div>
    )
}

export default Weather