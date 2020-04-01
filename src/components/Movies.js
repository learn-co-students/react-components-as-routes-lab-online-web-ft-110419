import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  function renderMovies() {
    return movies.map(movie => {
      return (
        <div className='movie'>
          <h2>{movie.title}</h2>
          <p>Run time: {movie.time}</p>
          <ul>Genres: {movie.genres.map(genre=> <li key={genre}>{genre}</li>)}</ul>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
