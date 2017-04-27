import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  // MY SOLUTION (WORKS)

  // handleClickDown() {
  //   var value = this.state.value - 1;
  //
  //   if (this.state.value === 0) {
  //     this.setState({
  //       value: 0
  //     })
  //   }
  //   if (this.state.value > 0) {
  //     this.setState({
  //       value: value
  //     })
  //   }
  //
  // }
  //
  // handleClickUp() {
  //   var value = this.state.value + 1;
  //   this.setState({
  //     value: value
  //   });
  // }


  // ERIC'S SOLUTION
  handleClickDown() {
    if (this.state.value === 0) {
      return;
    }
    this.setState({
      value: this.state.value - 1
    });
  }

  handleClickUp() {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.handleClickDown()}>down</button>
        <span>{this.state.value}</span>
        <button onClick={ () => this.handleClickUp()}>up</button>
      </div>
    )
  }

}
//
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Clicker />
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <Clicker />,
  document.getElementById('root')
);
