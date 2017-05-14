import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home.js';
import Counter from './Counter.js'
import ReduxCounter from './ReduxCounter.js'
import Chuck from './Chuck.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ol>
              <li><Link to="/">[Home]</Link></li>
              <li><Link to="/counter">[React Counter]</Link></li>
              <li><Link to="/reduxcounter">[Redux Counter]</Link></li>
              <li><Link to="/chuck">[Chuck Norris Joke Generator]</Link></li>
            </ol>
          </nav>
          <div className="mainSection">
            <Route path="/" exact component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/reduxcounter" component={ReduxCounter} />
            <Route path="/chuck" component={Chuck} />
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
