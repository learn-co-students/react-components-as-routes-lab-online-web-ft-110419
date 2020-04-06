import React from 'react';
import { actors } from '../data';

// title: 'Doctor Strange',
//   time: 115,
//     genres: ['Action', 'Adventure', 'Fantasy'],
//       metascore: 7

debugger
const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        <div className="actor" key={index}>
          <h1>{actor.name}</h1>
        </div>
      })}
    </div>
  );
};

export default Actors;
