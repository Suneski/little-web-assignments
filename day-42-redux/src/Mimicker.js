import React from 'react';
import { createStore } from 'redux';

const reducer = (state = { value: '-initial text-'}, action) => {
  if (action.type === 'INPUT_CHANGE') {
    return Object.assign({}, state, { value: action.value })
  }
  else {
    return state;
  }
}

const store = createStore(reducer);


class Mimicker extends React.Component {
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

  render() {
    console.log('render state', this.state);
    return (
      <div>
        <input onChange={(evt) => this.handleChange(evt)}/>
        <p style={{color: 'red', fontWeight: 'bold'}}>{this.state.value}</p>
      </div>
    )
  }
}

module.exports = Mimicker;
