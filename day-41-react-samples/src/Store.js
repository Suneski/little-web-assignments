import { createStore } from 'redux';

// CONSTANTS
var constants = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};

// ACTIONS
const INCREMENT = { type: constants.INCREMENT };
const DECREMENT = { type: constants.DECREMENT };
const RESET = { type: constants.RESET };

// REDUCER
const counterReducer = (state = { number: 0 }, action) => {

  switch(action.type) {
    case constants.INCREMENT:
      return { number: state.number + 1 };
    case constants.DECREMENT:
      return { number: state.number - 1 };
    case constants.RESET:
      return { number: 0 };
  }

  return state;
};

// STORE
var store = createStore(counterReducer);

module.exports = {
  store: store,
  actions: {
    DECREMENT: DECREMENT,
    INCREMENT: INCREMENT,
    RESET: RESET
  }
};
