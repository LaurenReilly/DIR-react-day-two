import React from 'react';
import Cuisines from './components/restaurants/Cuisines';
import Genre from './components/movies/Genre';
import data from './restaurantData';
import movieData from './movieData';
import './App.css';

function App() {
  let cuisines = Object.keys(data)
  let genres = Object.keys(movieData);
  return (
    <div className="App">
      <h1>Restaurants Exercise</h1>
        {
          cuisines.map((cuisine, i) => {
            return <Cuisines key={i} cuisine={cuisine} restaurants={data[cuisine]}/>
          })
        }
        <hr/>
        <h1>Movies Exercise</h1>
        {
          genres.map((genre, i) => {
            return <Genre key={i} genre={genre} data={movieData[genre]}/>
          })
        }
    </div>
  );
}

export default App;
