import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let dir = ( directors.map( d =>{
    return (
      <div>
        <h3>Name: {d.name}</h3>
        <label for="movies">Movies:</label>
        <ul name="movies">
        {d.movies.map(mov => {
           return (<li>{mov}</li>)
         })}
  </ul>
  </div>
  
  )}))
  return (
    <div>
      <h1>Directors Page</h1>
      {dir}
    </div>
  );
}

export default Directors
