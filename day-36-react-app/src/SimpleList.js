import React from 'react';
import './simplelist.css';

class SimpleList extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      items: []
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(evt) {
    console.log(evt.keyCode);
    if (evt.keyCode === 13) {
      var copy = this.state.items.slice();
      copy.push(evt.target.value);
      evt.target.value = '';

      this.setState({
        items: copy
      });
    }
  }

  render() {
    return (
      <div className="simple-list">
        <input onKeyUp={this.handleKeyUp}/>
        <ol>
          {this.state.items.map((x, i) => <li key={i}>{x}</li>)}
        </ol>
      </div>
    )
  }
}

module.exports = SimpleList;
