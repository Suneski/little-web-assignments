import React from 'react';
import { createStore } from 'redux';

var constants = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};

const INCREMENT = { type: 'constants.INCREMENT' };
const DECREMENT = { type: 'constants.DECREMENT' };
const RESET = { type: 'constants.RESET' };

const counterReducer = (state = { number: 0 }, action) => {

  switch(action.type) {
    case 'constants.INCREMENT':
      return { number: state.number + 1 };
    case 'constants.DECREMENT':
      return { number: state.number - 1 };
    case 'constants.RESET':
      return { number: 0 };
  }

  return state;
};

var store = createStore(counterReducer);

// var output = counterReducer({ number: 0 }, INCREMENT);
// console.log('output', output);
//
// output = counterReducer(output, DECREMENT);
// console.log('now?', output);


class Counter extends React.Component {
  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  goDown() {
    store.dispatch(DECREMENT);
    // this.setState({
    //   number: this.state.number - 1
    // })
  }

  goUp() {
    store.dispatch(INCREMENT);
    // this.setState({
    //   number: this.state.number + 1
    // })
  }

  resetButton() {
    store.dispatch(RESET);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.goDown()}>-</button>
        <div>{this.state.number}</div>
        <button onClick={() => this.goUp()}>+</button>
        <button onClick={() => this.resetButton()}>RESET</button>
      </div>
    );
  }
}

export default Counter;
