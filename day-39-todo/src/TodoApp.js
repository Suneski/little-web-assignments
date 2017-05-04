import React from 'react';
import $ from 'jquery';

const bucketId = '947daa5b-4ea5-4ca4-a503-fc4a509acbae';

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }

  createNewItem(inputText) {
    //ajax call to save data
    $.ajax({
      url: `http://spiffy-todo-api.herokuapp.com/api/item?bucketId=${bucketId}`,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done((data) => {
      console.log('what do i get back?', data)
    });
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      this.createNewItem(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
    }
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.inputValue}
        />
      </div>
    );
  }
}

module.exports = TodoApp;
