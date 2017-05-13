import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      number: 0
    }
  }

  subtractOne() {
    this.setState({
      number: this.state.number - 1
    })
  }

  addOne() {
    this.setState ({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.subtractOne()}>-</button>
        {this.state.number}
        <button onClick={() => this.addOne()}>+</button>
      </div>
    )
  }
}

module.exports = Counter;
