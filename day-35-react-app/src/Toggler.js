import React from 'react';

class Toggler extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "on"
    }
  }

  // toggler() {
  //   if (this.state.value === "on") {
  //     this.setState({
  //       value: "off"
  //     })
  //   }
  //   if (this.state.value === "off") {
  //     this.setState({
  //       value: "on"
  //     })
  //   }
  // }

  toggler() {
    this.setState({
      value: this.state.value === "on" ? "off" : "on"
    })
  }

  render() {
    return (
      <div className="toggleBoggle" onClick={ () => this.toggler()}>
        {this.state.value}
      </div>
    )

  }
}

module.exports = Toggler;
