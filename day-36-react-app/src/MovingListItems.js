import React from 'react';

class MovingListItems extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      items: []
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      var copy = this.state.items.slice();
      copy.push(evt.target.value);
      evt.target.value = '';

      this.setState({
        items: copy
      });
    }
  }

  upToTop(index) {
    console.log('You clicked on', index);
    var copy = this.state.items.slice();
    copy.push(copy[index]);
    copy.splice(index, 1);
    this.setState({
      items: copy
    })
  }

  render() {
    let items = this.state.items.map((x,i) => {
      return <li onClick={() => this.upToTop(i)} key={i}>{x}</li>
    });

    return (
      <div>
        <input onKeyUp={this.handleKeyUp} /> (Throw item to end of list input)
        <ol>
          {items}
        </ol>
      </div>
    )
  }
}

module.exports = MovingListItems;
