import React from 'react';
import ReactDOM from 'react-dom';
import UserInput from './UserInput.jsx';
import SearchBar from './SearchBar.jsx';
import searchMovies from '../lib/searchMovies.js';
import MovieList from './MovieList.jsx';
import movies from '../lib/exampleData.js';
import MOVIE_API_KEY from './movieAPI.js';
import searchMovie from './searchMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedMovies: [],
      notWatchedMovies: [],
      watchListToggle: false,
      notWatchListBtnColor: 'green',
      watchListBtnColor: 'grey',
      userInput: '',
      searchInput: ''
    }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://127.0.0.1:3000/api/movies',
      type: 'GET',
      content: 'string',
      success: (results) => {
        this.setState({
          notWatchedMovies: JSON.parse(results)
        })
      },
      error: (err) => {
        throw ('Could not get movies')
      }
    })
  }

  switchList() {
    var temp;
    if (!this.state.watchListToggle) {
      temp = this.state.watchedMovies;
      this.setState({watchedMovies: this.state.notWatchedMovies, notWatchedMovies: temp, watchListToggle: true, notWatchListBtnColor: 'grey', watchListBtnColor: 'green'});
    } else {
      temp = this.state.notWatchedMovies;
      this.setState({notWatchedMovies: this.state.watchedMovies, watchedMovies: temp, watchedListToggle: false, notWatchListBtnColor: 'green', watchListBtnColor: 'grey'});
    }
  }

  // move the movie that was clicked on to the other list
  // called in MovieListEntry line 26, commented out for now
  moveMovie() {

  }

  handleUserKeyPress(event) {
    this.setState({userInput: event.target.value + event.key});
  }

  handleUserSubmit(event) {
    this.state.notWatchedMovies.push({'title' : this.state.userInput});
    this.setState({movies: this.state.notWatchedMovies, userInput: ''});
  }

  handleSearchKeyPress(event) {
    this.setState({searchInput: event.target.value + event.key});
  }

  handleSearchSubmit(event) {
    var keywords = this.state.searchInput.split(' ');

    var options = {
      key: MOVIE_API_KEY,
      query: this.state.searchInput || ''
    }

    searchMovie(options, (data) => {

      data.forEach((element) => {
        var movie = {
          title: element.title,
          releaseDate: element.release_date,
          rating: element.vote_average,
          poster: element.poster_path,
        }
        this.state.notWatchedMovies.push(movie);
      });

      this.setState({notWatchedMovies: this.state.notWatchedMovies, searchInput: ''});
    });

    if (this.state.notWatchedMovies.length === 0) {
      this.state.notWatchedMovies.push({title: 'That ain\'t it. Try looking up a different word.'});
    }

  }

  render() {
    return (
      <div>
        <h1>My Movie List</h1>
        <UserInput
          handleUserKeyPress={this.handleUserKeyPress.bind(this)}
          handleUserSubmit={this.handleUserSubmit.bind(this)}
        />
        <SearchBar
          handleSearchKeyPress={this.handleSearchKeyPress.bind(this)}
          handleSearchSubmit={this.handleSearchSubmit.bind(this)}
        />
        <MovieList
          switchList={this.switchList.bind(this)}
          notWatchListBtnColor={this.state.notWatchListBtnColor}
          watchListBtnColor={this.state.watchListBtnColor}
          notWatchedMovies={this.state.notWatchedMovies}
        />
      </div>
    );
  }
}

export default App