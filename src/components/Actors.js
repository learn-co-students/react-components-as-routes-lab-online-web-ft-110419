import React from 'react';
// import { actors } from '../data';
import { actors } from '../data'

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div className="actor" key={index}>
          <h1>{actor.name}</h1>
          <h3>{actor.movies.join(", ")}</h3>
        </div>
      ))}
    </div>
  );
};

export default Actors;
