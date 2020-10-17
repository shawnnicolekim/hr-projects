import React from 'react';

var MovieInfo = ({year, rating}) => {
  return (
    <ul>
      <li>Release Date: {year}</li>
      <li>Rating: {imdbRating}</li>
    </ul>
  );
}

export default MovieInfo;