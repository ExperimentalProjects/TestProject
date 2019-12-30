import React, { useState } from 'react';
import { LIST_OF_CITIES } from '../utils/utils';
import ListItem from '../components/ListItem';

function App() {

  const [selectedItem, setSeletectedItem] = useState(null)

  return (
    <div className="App">
      <h1>Click on City to view weather</h1>
      {LIST_OF_CITIES.map(city =>
        <ListItem
          key={city.index}
          index={city.index}
          city={city.value}
          onSelect={() => {
            selectedItem === city.index ? setSeletectedItem(null) : setSeletectedItem(city.index)
          }} selectedItem={selectedItem} />)}
    </div>
  );
}

export default App;
