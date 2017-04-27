import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Clicker from './Clicker.js';
import TickCounter from './TickCounter.js';
import Clock from './Clock.js';







class App extends React.Component {
  render() {
    return (
      <div>
        <Clicker />
        <TickCounter />
        <Clock />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
