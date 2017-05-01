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
    // console.log(evt.keyCode);
    if (evt.keyCode === 13) {
      var copy = this.state.items.slice();
      copy.push(evt.target.value);
      evt.target.value = '';

      this.setState({
        items: copy
      });
    }
  }

  removeFromList(index) {
    console.log('You clicked on', index);
    var copy = this.state.items.slice();
    copy.splice(index, 1);
    this.setState({
      items: copy
    })
  }

  render() {
    let items = this.state.items.map((x, i) => {
      return <li onClick={() => this.removeFromList(i)} key={i}>{x}</li>
    });

    return (
      <div className="simple-list">
        <input onKeyUp={this.handleKeyUp}/>
        <ol>
          {items}
        </ol>
      </div>
    )
  }
}

module.exports = SimpleList;
