import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import bodyParser from 'body-parser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount() {
    fetch('/repos')
      .then(response1 => {
        console.log(response1.body);
        var body = response1;
        return body;
      })
      .then(response1 => {
        var body = response1.json();
        return body;
      })
      .then(response2 => {
        response2.sort((a, b) => {
          return a.watchers - b.watchers;
        });
        this.setState({repos: response2});
      })
      .catch(err1 => {
        console.error(err1);
      })
  }


  search (term) {
    fetch('/repos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: term})
    })
    .then(response1 => {
      var body = response1.json();
      return body;
    })
    .then(response2 => {
      this.setState({repos: response2});
    })
    .catch(err1 => {
      console.error(err1);
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));