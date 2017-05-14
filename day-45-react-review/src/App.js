import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home.js';
import Counter from './Counter.js'
import ReduxCounter from './ReduxCounter.js'
import Chuck from './Chuck.js'
import ReduxChuck from './ReduxChuck.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ol>
              <li><Link to="/">[Home]</Link></li>
              <li><Link to="/counter">[React - Counter]</Link></li>
              <li><Link to="/reduxcounter">[Redux - Counter]</Link></li>
              <li><Link to="/chuck">[React - Chuck Norris Joke Generator]</Link></li>
              <li><Link to="/reduxchuck">[Redux - Chuck Norris Joke Generator]</Link></li>
            </ol>
          </nav>
          <div className="mainSection">
            <Route path="/" exact component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/reduxcounter" component={ReduxCounter} />
            <Route path="/chuck" component={Chuck} />
            <Route path="/reduxchuck" component={ReduxChuck} />
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
