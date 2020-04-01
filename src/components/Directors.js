import React from 'react';
import { directors } from '../data';

const Directors = () => {
  
  function renderDirectors() {
    return directors.map(director => {
      return (
        <div className='director' key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie=><li key={movie}>{movie}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
