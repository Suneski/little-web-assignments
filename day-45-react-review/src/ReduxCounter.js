import React from 'react';
import { store, actions } from './Store.js';

class ReduxCounter extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={() => store.dispatch(actions.DECREMENT)}>-</button>
        <button onClick={() => store.dispatch(actions.RESET)}>NUKE IT</button>
        <button onClick={() => store.dispatch(actions.INCREMENT)}>+</button>
      </div>
    )
  }
}

module.exports = ReduxCounter;
