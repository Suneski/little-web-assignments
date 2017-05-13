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

  backToZero() {
    this.setState ({
      number: 0
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={() => this.subtractOne()}>-</button>
        <button onClick={() => this.backToZero()}>RESET</button>
        <button onClick={() => this.addOne()}>+</button>
      </div>
    )
  }
}

module.exports = Counter;
