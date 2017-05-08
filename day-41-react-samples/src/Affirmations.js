import React from 'react';
import { createStore } from 'redux';

var constants = {
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT'
};

var affs = [
  "Term 0",
  "Term 1",
  "Term 2",
  "Term 3",
  "Term 4",
  "Term 5",
]

const PREVIOUS = { type: constants.PREVIOUS };
const NEXT = { type: constants.NEXT };

const counterReducer = (state = { number: 0 }, action) => {
  switch(action.type) {
    case constants.PREVIOUS:
      return { number: state.number - 1 }
    case constants.NEXT:
      return { number: state.number + 1 }
  }
  return state;
}

var store = createStore(counterReducer);


class Affirmations extends React.Component {
  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={() => store.dispatch(PREVIOUS)}>PREVIOUS</button>
        <button onClick={() => store.dispatch(NEXT)}>NEXT</button>
      </div>
    );
  }
}

module.exports = Affirmations;
