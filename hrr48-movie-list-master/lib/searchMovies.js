var searchMovies = (result, callback = () => {}) => {
  $.ajax({
    url: '/Users/shawnkim/Desktop/HackReactor/hrr48-movie-list/lib/exampleData.js',
    type: 'GET',
    success: callback,
    error: function(error) {
      console.error('Could not fetch movies', error);
    }
  });
}

export default searchMovies