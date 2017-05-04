import React, { Component } from 'react';
import FormPlay from './FormPlay.js'
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
  Prompt
} from 'react-router-dom';

var Home = () => (
  <div>Homepage (yay?)</div>
)

var NotFound = () => (
  <div>
    <img src="images/not-found.jpg" alt="not found"/>
  </div>
)

var AboutUs = () => (
  <div>About Us</div>
)

var Navigation = () => {
  return <div className="nav">
    <ul>
      <li><NavLink to="/" activeStyle={{fontWeight: "bold", color: "grey"}} exact={true}>Home</NavLink></li>
      <li><NavLink to="/aboutus" activeStyle={{fontWeight: "bold", color: "grey"}}>About Us</NavLink></li>
      <li><NavLink to="/formplay" activeStyle={{fontWeight: "bold", color: "grey"}}>Form Play</NavLink></li>
    </ul>
  </div>
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/formplay" component={FormPlay} />
            <Route component={NotFound} />
          </Switch>
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
