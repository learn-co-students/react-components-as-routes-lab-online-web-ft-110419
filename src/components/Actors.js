import React from "react";
import { actors } from "../data";

const Actors = () => {
  const actorsList = () => {
    return actors.map(({ name, movies }) => {
      return (
        <div key={name} className="actor">
          <h3>Name: {name} </h3>
          <p>Movies: </p>
          <ul>{moviesList(movies)}</ul>
        </div>
      );
    });
  };

  const moviesList = movies =>
    movies.map(movie => <li key={movie}>{movie}</li>);

  return (
    <div>
      <h1>Actors Page</h1>
      <div>{actorsList()}</div>
    </div>
  );
};

export default Actors;
