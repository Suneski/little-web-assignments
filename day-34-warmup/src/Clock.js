// import React from 'react';
//
//
// class Clock extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       time: new Date().toTimeString()
//     }
//   }
//
//   clock() {
//     this.setState({
//       time: new Date().toLocaleTimeString()
//     });
//   }
//
//   componentDidMount() {
//     setInterval(() => this.clock(), 1000);
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.time}
//       </div>
//     )
//   }
// }
//
// module.exports = Clock;




import React from 'react';


class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    }
  }

  clock() {
    var newDate = new Date();

    this.setState({
      hour: newDate.getHours(),
      minute: newDate.getMinutes(),
      seconds: newDate.getSeconds()
    })

  }

  componentDidMount() {
    setInterval(() => this.clock(), 1000);
  }

  render() {
    return (
      <div>
        <div className="boringClock">
          {this.state.hour}:{this.state.minute}:{this.state.seconds}
        </div>
      </div>
    )
  }
}

module.exports = Clock;
