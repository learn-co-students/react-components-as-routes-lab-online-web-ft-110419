import React from 'react';
import { actors } from '../data';

const Actors = () => {


  const act = (
    actors.map( (a,index) => {   
    return (
    <div key={index}> 
      <h3>{a.name}</h3>
      <ul>{a.movies.map(mov=> {
        return (<li>{mov}</li>)
      })
        }
       </ul>
    </ div>
    )
      }))
  return (
    <div>
      <h1>Actors Page</h1>
      {act}
    </div>
  );
};

export default Actors;
