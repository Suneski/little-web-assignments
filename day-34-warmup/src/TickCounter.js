import React from 'react';

class TickCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }


  tick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }


  render() {
    return (
      <div className="tickCounter">
        {this.state.count}
      </div>
    );
  }
}

module.exports = TickCounter;
