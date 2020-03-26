import React from "react";
import { movies } from "../data";

const Movies = () => {
  const movieList = () => {
    return movies.map(({ title, time, genres }) => {
      return (
        <li key={title}>
          <h3>Name: {title} </h3>
          <p>Time: {time}</p>
          <p>Genres: </p>
          <ul>{genreList(genres)}</ul>
        </li>
      );
    });
  };

  const genreList = genres => genres.map(genre => <li key={genre}>{genre}</li>);

  return (
    <div>
      <h1>Movies Page</h1>
      <ul>{movieList()}</ul>
    </div>
  );
};

export default Movies;
