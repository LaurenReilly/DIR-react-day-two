import React from 'react';


import Cuisines from './components/restaurants/Cuisines'

import data from './restaurantData';


import './App.css';

function App() {
  let cuisines = Object.keys(data)
  return (
    <div className="App">
      {
        cuisines.map((cuisine, i) => {
          return <Cuisines key={i} cuisine={cuisine} restaurants={data[cuisine]}/>
        })
      }
    </div>
  );
}

export default App;
