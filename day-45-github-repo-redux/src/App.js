import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <p id='search'>SEARCH: </p>
          <input id='search-query' placeholder="github repository name"/>
        </nav>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
