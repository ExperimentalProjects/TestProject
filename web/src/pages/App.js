import React, { useState } from 'react';
import { cities } from '../utils/utils';
import ListItem from '../components/ListItem';
import styled from 'styled-components'

function App() {

  const [selectedItem, setSeletectedItem] = useState(null)

  return (
    <AppContainer>
      {/* <h1>Weather</h1> */}
      {cities.map(city =>
        <ListItem
          {...city}
          key={city.index}
          index={city.index}
          city={city.city}
          onSelect={() => {
            selectedItem === city.index ? setSeletectedItem(null) : setSeletectedItem(city.index)
          }} selectedItem={selectedItem} />)}
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: center;
`