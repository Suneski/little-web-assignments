import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TodoApp from './TodoApp.js';

const Home = () => <div>Home stuff goes here.</div>
const Gallery = () => <div>Gallery</div>




class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h1>I made a thing</h1>
          </header>
          <nav>
            <ol>
              <li><Link to="/">[Home]</Link></li>
              <li><Link to="/app">[To-Do App]</Link></li>
              <li><Link to="/gallery">[Gallery]</Link></li>
            </ol>
          </nav>
          <div className="mainSection">
            <Route path="/" exact component={Home} />
            <Route path="/app" component={TodoApp} />
            <Route path="/gallery" component={Gallery} />
          </div>
        </div>

      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
