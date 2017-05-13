import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js';
import ReduxCounter from './ReduxCounter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Standard React Counter</h1>
        <Counter />
        <h1>Redux Counter</h1>
        <ReduxCounter />

      </div>
    );
  }
}

export default App;
