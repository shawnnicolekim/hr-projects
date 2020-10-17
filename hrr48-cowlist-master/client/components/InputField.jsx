import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    }
  }

  /*
  // updates state.name when changes
  handleNameChange(event) {
    this.setState({name = event.target.value})
  }

  // handles state.description when changes
  handleDesChange(event) {
    this.setState({description = event.target.value})
  }
  */

  render() {
    return (
      <form>
        <label htmlFor="cowName">Cow's Name</label>
        <input type="text" id="cowName" />
        <label htmlFor="cowDescription">Cow's Description</label>
        <input type="text" id="cowDescription" />
        <input type="button" value="Submit your cow!" onClick={() => this.props.handleSubmit()}/>
      </form>
    )
  }
}

export default InputField