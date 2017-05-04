import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import List from './List.js'
import Detail from './Detail.js'
import About from './About.js'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [
        {
          name: 'Bob Smith',
          id: 5678,
          description: "random dude"
        },
        {
          name: 'Joan Rivers',
          id: 9356787602,
          description: "random dudette"
        }
      ]
    }
  }

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
          <Route path="/" exact render={() => <List people={this.state.people} />} />
          <Route path="/detail/:id" render={(props) => <Detail people={this.state.people} id={props.match.params.id} />} />
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
