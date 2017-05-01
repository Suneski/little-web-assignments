import React from 'react';
import ReactDOM from 'react-dom';
import SimpleList from './SimpleList';
import MovingListItems from './MovingListItems'
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-div">
        <SimpleList />
        <MovingListItems />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
