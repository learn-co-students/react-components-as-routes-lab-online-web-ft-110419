import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <h3>{movie.title}</h3>
            <h5>Metascore: {movie.metascore || "none"}</h5>
            <h5>Time: {movie.time}</h5>
            <ul>
              {movie.genres.map((genre, index) => {
                return (
                  <li key={index}>{genre}</li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
