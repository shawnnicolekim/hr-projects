import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import movies from '../lib/exampleData.js';

var MovieList = ({switchList, notWatchListBtnColor, watchedButtonColor, watchListBtnColor, handleWatchClick, notWatchedMovies}) => {
  return (
    <div className="movieList">
      <button
        type="button"
        className="watched"
        style={{backgroundColor: watchListBtnColor}}
        onClick={(event) => switchList(event)}
      >WATCHED LIST</button>
      <button
        type="button"
        className="notWatched"
        style={{backgroundColor: notWatchListBtnColor}}
        onClick={(event) => switchList(event)}
      >NEED TO WATCH LIST</button>
      {notWatchedMovies.map(movie =>
        <MovieListEntry
          movie={movie}
          watchedButtonColor={watchedButtonColor}
          handleWatchClick={handleWatchClick}/>
      )}
    </div>
  );
}

export default MovieList