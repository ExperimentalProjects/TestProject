import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getWeather } from '../utils/api';

const loadWeatherDetails = (city, setWeather) => {
    getWeather(city).then(response => {
        setWeather(response)
    })
}


const Weather = (props) => {
    const [weather, setWeather] = useState({})
    useEffect(() => loadWeatherDetails(props, setWeather), [props.city])
    const { location, current_observation, forecasts } = weather;
    return (
        <Container>
            {location && <div>
                {location.city}
            </div>
            }
            {current_observation && <div>
                <div>Sunrise:{current_observation.astronomy && current_observation.astronomy.sunrise}, Sunset:{current_observation.astronomy && current_observation.astronomy.sunset}</div>
            </div>
            }
            {forecasts && <Rows>
                {forecasts.map(dayData => <ForecastDiv key={dayData.date}>
                    <div>{new Date(dayData.date * 1000).toDateString()}</div>
                    <div>Low: {dayData.low}, High:{dayData.high}</div>
                    <div>{dayData.text}</div>
                </ForecastDiv>)}
            </Rows>
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
  background-color: #353535;
  color: white;
  margin:10px;
  padding:10px;
  border-radius: 4px;
`

const Rows = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`

const ForecastDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border: 1px solid white;
padding: 5px;
font-size: 16px;
 width : 200px;
`