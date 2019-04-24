import React from 'react';
import Cuisines from './components/restaurants/Cuisines';
import Genre from './components/movies/Genre';
import data from './restaurantData';
import movieData from './movieData';
import sportsData from './sportsData';

import './App.css';

function App() {
  let cuisines = Object.keys(data);
  let genres = Object.keys(movieData);
  let sports = Object.keys(sportsData);
  return (
    <div className="App">
      <h1 style={{color: "grey"}}>Restaurants Exercise</h1>
        {
          cuisines.map((cuisine, i) => {
            return <Cuisines key={i} cuisine={cuisine} restaurants={data[cuisine]}/>
          })
        }
        <hr/>
        <h1 style={{color: "grey"}}>Movies Exercise</h1>
        {
          genres.map((genre, i) => {
            return <Genre key={i} genre={genre} data={movieData[genre]}/>
          })
        }
        <hr/>
        <h1 style={{color: "grey"}}>Sports Exercise (Reusing restaurants components because I can)</h1>
        {
          sports.map((cuisine, i) => {
            return <Cuisines key={i} cuisine={cuisine} restaurants={sportsData[cuisine]}/>
          })
        }
    </div>
  );
}

export default App;
