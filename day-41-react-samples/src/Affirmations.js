import React from 'react';
import { createStore } from 'redux';

var constants = {
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT'
};

const PREVIOUS = { type: constants.PREVIOUS };
const NEXT = { type: constants.NEXT };

const counterReducer = (state = { number: 0, messages: [
  "Today is Monday",
  "I'm wearing shorts",
  "My wife didn't believe the Mexican place down the street had awesome fries, but I proved her wrong on Saturday!",
  "My cat bit my toes last night, again",
  "I may wear jeans tomorrow.",
  "-insert message here-"]
  }, action) => {
  switch(action.type) {
    case constants.PREVIOUS:
    if (state.number > 0) {
      return { number: state.number - 1 }
    }
    else {
      return { number: 5 }
    }
    case constants.NEXT:
      if (state.number < 5) {
        return { number: state.number + 1 }
      }
      else {
        return { number: 0 }
      }
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
        <div>{this.state.messages[this.state.number]}</div>
        <button onClick={() => store.dispatch(PREVIOUS)}>PREVIOUS</button>
        <button onClick={() => store.dispatch(NEXT)}>NEXT</button>
      </div>
    );
  }
}

module.exports = Affirmations;
