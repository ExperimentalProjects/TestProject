import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
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
        <Container>
            {location && <div>
                {location.city}
            </div>
            }
            {current_observation && <div>
                {current_observation.astronomy.sunrise}
            </div>
            }
            {forecasts && <div>
                {forecasts.map(dayData => <div key={dayData.date}>{dayData.day} {dayData.text}</div>)}
            </div>
            }
        </Container>
    )
}

export default Weather

const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: center;
`