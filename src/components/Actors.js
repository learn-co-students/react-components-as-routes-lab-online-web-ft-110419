import React from 'react';
import { actors } from '../data';

function renderActors(){
  return (
    <span>
      {actors.map(actor => 
        <div>
          <h1>{actor.name}</h1>
          <ul>
            {actor.movies.map(movie => 
              <li>{movie}</li>
            )}
          </ul>
        </div>
      )}
    </span>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}    </div>
  );
};

export default Actors;
