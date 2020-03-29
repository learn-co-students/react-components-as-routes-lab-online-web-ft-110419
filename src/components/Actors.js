import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => (
        <div key={idx}>
          <p>{actor.name}</p>
          <p>Movies:</p>
          <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
