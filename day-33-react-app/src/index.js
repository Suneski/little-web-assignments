import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      elephantTotal: 34567,
      trucksOfCheese: 3456789876543
    }
  }

  handleClick() {
    var value = this.state.value + 1;
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <div onClick={ () => this.handleClick()}>
        <strong>Value:</strong> {this.state.value}
      </div>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
