import React from "react";
import { directors } from "../data";

const Directors = () => {
  const directorsList = () => {
    return directors.map(({ name, movies }) => {
      return (
        <li key={name}>
          <h3>Name: {name} </h3>
          <p>Movies: </p>
          <ul>{moviesList(movies)}</ul>
        </li>
      );
    });
  };

  const moviesList = movies =>
    movies.map(movie => <li key={movie}>{movie}</li>);

  return (
    <div>
      <h1>Directors Page</h1>
      <ul>{directorsList()}</ul>
    </div>
  );
};

export default Directors;
