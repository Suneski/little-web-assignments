import React, { Component } from 'react';
import './App.css';
import { store } from './store.js';
import api from './Api.js';
import Mimicker from './Mimicker.js'
import Mimicker2 from './Mimicker2.js'

console.log('what is in api?', api);

class App extends Component {
  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  handleChange(evt) {
    const action = { type: 'SEARCH_VALUE_CHANGE', value: evt.target.value };
    store.dispatch(action);
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      api.repoSearch(this.state.searchValue);
    }
  }


  render() {
    console.log('render state', this.state);

    const items = this.state.items.map((x) => <li key={x.id}>{x.name}</li>)

    return (
      <div className="App">
        <input
          value={this.state.searchValue}
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}
        />
        <ol>
          {items}
        </ol>

        <hr />

        <Mimicker />

        <hr />

        <Mimicker2 />
      </div>
    );
  }
}

export default App;
