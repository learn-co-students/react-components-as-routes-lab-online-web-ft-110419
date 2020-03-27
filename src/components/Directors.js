import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
       <h1>Directors Page</h1>
      {directors.map(director => {
      	return (
      		<div>
      			<h3>{director.name}</h3>
      			<p>Movies:</p>
      			<ul>
      				{director.movies.map(genre => <li>{genre}</li>)}
      			</ul>
      		</div>
      	)}
     )}
    </div>
  );
}

export default Directors
