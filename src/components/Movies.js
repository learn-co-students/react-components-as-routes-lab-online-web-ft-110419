import React from 'react';
import { movies } from '../data';

function renderMovies() {
  return (
    <span>
      {movies.map(movie => 
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map(genre => 
              <li>{genre}</li>
            )}
          </ul>
        </div>
      )}
    </span>
  )
  
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {/* <div>{renderMovies()}</div> */}
        {renderMovies()}

    </div>
  );
};

export default Movies;
