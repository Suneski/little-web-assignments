import React from 'react';


class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toTimeString()
    }
  }

  clock() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  componentDidMount() {
    setInterval(() => this.clock(), 1000);
  }

  render() {
    return (
      <div>
        {this.state.time}
      </div>
    )
  }
}

module.exports = Clock;
