import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokemon from './Pokemon.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <div>Home Page</div>

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header>

          </header>
          <nav>
            <ol>
              <li><Link to="/">[Home]</Link></li>
              <li><Link to="/pokemon">[Pokemon]</Link></li>
            </ol>
          </nav>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/pokemon" component={Pokemon} />
          </div>
        </div>

      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
