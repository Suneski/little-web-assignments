import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  handleClickDown() {
    var value = this.state.value - 1;

    if (this.state.value === 0) {
      this.setState({
        value: 0
      })
    }
    if (this.state.value > 0) {
      this.setState({
        value: value
      })
    }

  }

  handleClickUp() {
    var value = this.state.value + 1;
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.handleClickDown()}>down</button>
        <span>{this.state.value}</span>
        <button onClick={ () => this.handleClickUp()}>up</button>
      </div>
    )
  }

}


ReactDOM.render(
  <Clicker />,
  document.getElementById('root')
);
