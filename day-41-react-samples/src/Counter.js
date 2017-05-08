import React from 'react';
import { store, DECREMENT, INCREMENT, RESET } from './Store.js';

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

  render() {
    return (
      <div>
        <button onClick={() => store.dispatch(DECREMENT)}>-</button>
        <div>{this.state.number}</div>
        <button onClick={() => store.dispatch(INCREMENT)}>+</button>
        <button onClick={() => store.dispatch(RESET)}>NUKE IT</button>
      </div>
    );
  }
}

export default Counter;
