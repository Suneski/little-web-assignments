import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import List from './List.js'
import Detail from './Detail.js'
import About from './About.js'

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <nav>
            <ol>
              <li><Link to="/">List</Link></li>
              <li><Link to="/detail">Detail</Link></li>
              <li><Link to="/about">About</Link></li>
            </ol>
          </nav>
          <Route path="/" exact component={List} />
          <Route path="/detail" component={Detail} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
