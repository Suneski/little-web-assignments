import React from 'react';

class SuperDuperClock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
  }

  changeTime() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    setInterval(() => this.changeTime(), 1000);
  }

  render() {
    return (
      <div>
        <Clock date={this.state.date} offset={-2} timezone="California" />
        <Clock date={this.state.date} offset={0} timezone="Texas" />
        <Clock date={this.state.date} offset={1} timezone="New York" />
      </div>
    );
  }
}

class Clock extends React.Component {

  render() {

    var hour = this.props.date.getHours() + this.props.offset;
    if (hour > 12) {
      hour -= 12;
    }

    var seconds = this.props.date.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    var minutes = this.props.date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }



    return(
      <div>
        {this.props.timezone} - {hour}:{minutes}:{seconds}
      </div>
    )
  }
}

module.exports = SuperDuperClock;
