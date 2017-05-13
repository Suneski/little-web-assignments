import { createStore } from 'redux';

var constants = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
  RESET: 'RESET'
}

const DECREMENT = { type: constants.DECREMENT };
const INCREMENT = { type: constants.INCREMENT };
const RESET = { type: constants.RESET };

const initialState = {
  number: 0
}

const reduxCounterReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.DECREMENT:
      return {number: state.number - 1}
    case constants.INCREMENT:
      return {number: state.number + 1}
    case constants.RESET:
      return initialState
    default:
      return state;
  }
};

var store = createStore(reduxCounterReducer);

module.exports = {
  store: store,
  actions: {
    DECREMENT: DECREMENT,
    INCREMENT: INCREMENT,
    RESET: RESET
  }
};
