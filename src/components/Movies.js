import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const list = (
   movies.map(mov => {
    let genres = (
      mov.genres.map(gen=>{
      return(<li>{gen}</li>)
      
      }))   
    return (
    <div>
     <h4>Name: {mov.title}</h4>
    <p>Time: {mov.time}</p>
    <p>Genres:</p>
    <ul>
      {genres}
    </ul>
   </ div> 
    )
    })
  )
  return (
    <div>
      <h1>Movies Page</h1>
  <div>{list}</div>
        
    </div>
  );
};

export default Movies;
