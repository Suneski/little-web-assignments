import { createStore } from 'redux';

const listOfJokes = [
  'Chuck Norris can sleep with 3 eyes open.',
  'The Red Scare in America actually had nothing to do with Communism. Chuck Norris was just wearing a Chicago Bulls jersey that day.',
  'Chuck Norris does not need change because prices change to whatever Chuck Norris has available.',
  'M.C. Hammer learned the hard way that Chuck Norris can touch this.',
  'Chuck Norris once went to Mars. Thats why there are no signs of life.'
]

var constants = {
  RANDOM_JOKE: 'RANDOM_JOKE'
}

const RANDOM_JOKE = { type:constants.RANDOM_JOKE };

const initialState = {
  text: 'Redux Chuck Norris Joke Generator'
}

const chuckReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.RANDOM_JOKE:
      var rng = Math.floor((Math.random() * listOfJokes.length));
      return {text: listOfJokes[rng]}
    default: return state;
  }
}

var store = createStore(chuckReducer);

module.exports = {
  store: store,
  actions: {
    RANDOM_JOKE: RANDOM_JOKE
  }
};
