import React, { Component } from 'react';

import RepoSearch from './RepoSearch.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <p id='search'>SEARCH: </p>
          <input id='search-query' placeholder="github repository name"/>
        </nav>
        <div className="repo-search-container">
          <RepoSearch />
        </div>
      </div>
    );
  }
}

export default App;
