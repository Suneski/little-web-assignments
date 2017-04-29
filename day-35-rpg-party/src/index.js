import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Select from './Select.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Select />
        <Select />
        <Select />
        <Select />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
