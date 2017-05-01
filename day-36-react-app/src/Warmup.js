import React from 'react';
import './warmup.css';

class Warmup extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ["first", "second", "third", "fourth", "fifth"]
    };
  }

  render() {
    return (
      <div className="simple-list">
        <ol>
          {this.state.items.map((x, i) => <li key={i}>{x}</li>)}
        </ol>
      </div>
    )
  }
}

module.exports = Warmup;
