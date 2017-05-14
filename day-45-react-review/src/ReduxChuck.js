import React from 'react';
import { store, actions } from './chuckstore.js';

class Chuck extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  randomizer() {
    store.dispatch(actions.RANDOM_JOKE);
  }

  render() {
    return (
      <div>
        {this.state.text}
        <button style={{display: 'block', margin: '0 auto'}} onClick={() => this.randomizer()}>RANDOM JOKE</button>
      </div>
    )
  }
}

module.exports = Chuck;
