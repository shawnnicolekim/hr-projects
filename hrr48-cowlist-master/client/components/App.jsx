import React from 'react';
import axios from 'axios';
import Spotlight from './Spotlight.jsx';
import CowList from './CowList.jsx';
import InputField from './InputField.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spotlight: null,
      cows: []
    }
  }

  componentDidMount() {
    axios.get('api/cows')
      .then(response => {
        this.setState({cows: response.data});
      })
      .catch(err => {
        console.error('Could not load page with cow info.');
      })
  }

  // this function handles the submit button from InputField
  handleSubmit() {
    var cowName = document.getElementById("cowName").value;
    var cowDescription = document.getElementById("cowDescription").value;
    var cowInfo = {
      name: cowName,
      description: cowDescription
    };

    axios.post('api/cows', cowInfo)
      .then(newCow => {
        if (typeof newCow.data === 'string') {
          alert('You cannot add cows with the same name :/ Sorry!');
        } else {
          this.state.cows.push(newCow.data);
          this.setState({cows: this.state.cows});
        }
      })
      .catch(err => {
        console.error('Could not update the cow list.');
      })
  }

  // this function puts a cow in the spotlight
  getSpotlight(chosen) {
    var chosenIndex = this.state.cows.findIndex( cow => cow.name === chosen.target.dataset.value);
    var chosenOne = this.state.cows.splice(chosenIndex, 1)[0];

    if (this.state.spotlight === null) {
      this.setState({spotlight: chosenOne});
    } else {
      this.state.cows.splice(chosenIndex, 0, this.state.spotlight);
      this.setState({spotlight: chosenOne, cows: this.state.cows})
    }
  }

  render() {
    return (
      <div>
        <Spotlight spotlight={this.state.spotlight}/>
        <InputField handleSubmit={this.handleSubmit.bind(this)}/>
        <CowList cows={this.state.cows} getSpotlight={this.getSpotlight.bind(this)}/>
      </div>
    )
  }
}

export default App