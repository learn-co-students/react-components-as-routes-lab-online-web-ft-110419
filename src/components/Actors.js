import React from 'react';
import { actors } from '../data';
import { act } from 'react-test-renderer';

const Actors = () => {

  function renderActors() {
    return actors.map(actor => {
        return (
          <div className='actor' key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie=><li key={movie}>{movie}</li>)}
          </ul>
        </div>
        )
      })
  };
  
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
