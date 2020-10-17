import React from 'react';
import MovieInfo from './MovieInfo.jsx';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryWatchedToggle: false,
      watchedButtonColor: 'grey',
      movieInfo: false
    };
    this.handleEntryClick.bind(this);
    this.handleWatchClick.bind(this);
  }

  handleEntryClick(obj) {
    this.setState({movieInfo: !this.state.movieInfo});
  }

  handleWatchClick() {
    if (!this.state.entryWatchedToggle) {
      this.setState({entryWatchedToggle: true, watchedButtonColor: 'green'});
    } else {
      this.setState({entryWatchedToggle: false, watchedButtonColor: 'grey'});
    }
    //moveMovie();
  }

  render() {
    var movieInfo;
    if (this.state.movieInfo) {
      movieInfo = <MovieInfo year={'1234'} rating={'3'} />;
    }
    return (
      <div className="movieListEntry">
        <h5
          className={this.props.movie.title.split(' ').join('')}
          onClick={() => this.handleEntryClick(this)}
        >
          {this.props.movie.title}
        </h5>
        <button
          type="button"
          style={{backgroundColor: this.state.watchedButtonColor}}
          className="watchOrNot"
          onClick={() => this.handleWatchClick()}
          >Watched</button>
        <div>{movieInfo}</div>
      </div>
    );
  }
}


export default MovieListEntry;