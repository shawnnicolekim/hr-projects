// create GroceryList component
  // contains unordered list of 2 grocery items
  // render this comp to the div w/ the id = app in index.html

var GroceryList = (props) => (
    <ul>
      {props.groceryItems.map(item =>
      <GroceryListItem groceryItems={item} />
    )}
  </ul>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      font: 'normal'
    };
    this.changeBold.bind(this)
  }

  changeBold(bool) {
    if (bool) {
      this.setState({font: 'bold'})
    } else {
      this.setState({font: 'normal'})
    }
  }

  render() {
    return (
      <li
        style={{fontWeight: this.state.font}}
        onMouseEnter={() => this.changeBold(true)}
        onMouseLeave={() => this.changeBold(false)}
      >
        {this.props.groceryItems}
      </li>);
  }
}

ReactDOM.render(<GroceryList groceryItems={['kale', 'grape', 'cucumber']} />, document.getElementById('app'));