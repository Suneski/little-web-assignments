import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Counter from './Counter.js'
import Affirmations from './Affirmations.js'

const Home = () => <div>Home Page</div>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/affirmations">Affirmations</Link>

          <Route path="/" exact component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/affirmations" component={Affirmations} />

        </div>
      </Router>
    );
  }
}

export default App;
