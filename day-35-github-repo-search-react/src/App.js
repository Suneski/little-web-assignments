import React, { Component } from 'react';
import logo from './octocat-logo.png';
import './App.css';
import RepoSearch from './RepoSearch';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Github Repository Search</h2>
          </div>
        </div>
        <RepoSearch />      
      </div>
    );
  }
}

export default App;
