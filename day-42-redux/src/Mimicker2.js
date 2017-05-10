import React from 'react';
import { createStore } from 'redux';

const initialState = {
  value: 'starter',
  accumulatedValue: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INPUT_CHANGE':
      return Object.assign({}, state, { value: action.value });
    case 'ADD_INPUT':
      return Object.assign({}, state, { accumulatedValue: state.accumulatedValue + state.value, value: '' });
    default: return state;
  }
}

const store = createStore(reducer);


class Mimicker2 extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  handleChange(evt) {
    console.log('handling change', evt.target.value);
    store.dispatch({ type: 'INPUT_CHANGE', value: evt.target.value })
  }

  // to find out keycode for space
  handleKeyUp(evt) {
    if (evt.keyCode === 32) {
      store.dispatch({ type: 'ADD_INPUT' });
    }
  }

  render() {
    console.log('render state', this.state);
    return (
      <div>
        <input
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          value={this.state.value}
        />
        <p style={{color: 'red', fontWeight: 'bold'}}>{this.state.accumulatedValue}</p>
      </div>
    )
  }
}

module.exports = Mimicker2;
