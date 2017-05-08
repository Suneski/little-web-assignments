import React from 'react';
import { createStore } from 'redux';

const INCREMENT = { type: 'INCREMENT' };
const DECREMENT = { type: 'DECREMENT' };

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      number: 0
    }
  }

  goDown() {
    this.setState({
      number: this.state.number - 1
    })
  }

  goUp() {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.goDown()}>-</button>
        <div>{this.state.number}</div>
        <button onClick={() => this.goUp()}>+</button>
      </div>
    );
  }
}

export default Counter;
