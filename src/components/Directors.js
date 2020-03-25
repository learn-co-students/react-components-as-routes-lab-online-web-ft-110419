import React from 'react';
import { directors } from '../data';

function renderDirectors(){
  return (
    <span>
      {directors.map(director => 
        <div>
          <h1>{director.name}</h1>
          <ul>
            {director.movies.map(movie => 
              <li>{movie}</li>
            )}
          </ul>
        </div>
      )}
    </span>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
