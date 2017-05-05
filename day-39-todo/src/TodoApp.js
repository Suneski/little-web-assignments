import React from 'react';
import $ from 'jquery';

const bucketId = '947daa5b-4ea5-4ca4-a503-fc4a509acbae';

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      inputValue: '',
      items: []
    };
  }

  reRunAjax() {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/items?bucketId=${bucketId}`
    })
    .done((data) => {
      console.log('What data do I have?', data);
      this.setState({
        items: data.items
      })
    });
  }

  refreshData() {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/items?bucketId=${bucketId}`
    })
    .done((data) => {
      console.log('What data do I have?', data);
      this.setState({
        items: data.items
      })
    });
  }

  componentDidMount() {
    this.refreshData();
  }


  createNewItem(inputText) {
    //ajax call to save data
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item?bucketId=${bucketId}`,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done((data) => {
      console.log('what do i get back?', data);
    });
    this.refreshData();
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
    let items = this.state.items.map((x, i) => <li key={x.id}>{x.text}</li>)

    return (
      <div>
        <input
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.inputValue}
        />
        <ol>
          {items}
        </ol>
      </div>
    );
  }
}

module.exports = TodoApp;
