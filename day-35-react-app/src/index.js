import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SwapiPeople from './SwapiPeople.js'
import Toggler from './Toggler.js'

class App extends Component {
  render() {
    return (
      <div>
        <Toggler />,
        <SwapiPeople />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
