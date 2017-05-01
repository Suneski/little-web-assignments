import React from 'react';
import ReactDOM from 'react-dom';
import SimpleList from './SimpleList';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-div">
        <SimpleList />
        <SimpleList />
        <SimpleList />
        <SimpleList />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
