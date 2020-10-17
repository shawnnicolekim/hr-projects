import MOVIE_API_KEY from './movieAPI.js';

var searchMovie = ({key, query}, callback) => {
  $.get('https://api.themoviedb.org/3/search/movie', {
    api_key: MOVIE_API_KEY,
    query: query,
  })

  .done((data) => {
    if (callback) {
      callback(data.results);
    }
  })

  .fail((responseJSON) => {
    responseJSON.error.errors.forEach((err) => console.error(err))
  })
}

export default searchMovie;
