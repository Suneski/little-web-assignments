import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SwapiPeople from './SwapiPeople.js'
// import Toggler from './Toggler.js'
import Clock from './Clock.js'
import SuperClock from './SuperClock.js'


class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <SuperClock />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
