import React from 'react';
import ReactDOM from 'react-dom';
import SimpleList from './SimpleList';
import MovingListItems from './MovingListItems'
import Names from './Names'
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-div">
        <SimpleList />
        <MovingListItems />
        <Names />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
