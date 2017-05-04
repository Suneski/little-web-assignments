import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

var Home = () => (
  <div>Homepage (first)</div>
)

var SecondPage = () => (
  <div>Hey, I'm a second page.</div>
)

var ThirdPage = () => (
  <div>I'm the third page.</div>
)

var Navigation = () => {
  return <div className='nav'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="secondpage">Second Page</Link></li>
      <li><Link to="thirdpage">Third Page</Link></li>
    </ul>
  </div>
}


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <div className="content">
              <Route path="/" exact component={Home} />
              <Route path="/secondpage" component={SecondPage} />
              <Route path="/thirdpage" component={ThirdPage} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
