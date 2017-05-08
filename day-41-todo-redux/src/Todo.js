import React from 'react';
import $ from 'jquery';
import './Todo.css';

const bucketId = '5730a3d7-99df-4692-b188-d34689579a20';

class Todo extends React.Component {

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
      // console.log('What data do I have?', data);
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
      // console.log('What data do I have?', data);
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

  removeFromList(id) {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    .done((data) => {
      this.refreshData();
    });
  }

  markAsComplete(id) {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST'
    })
    .done((data) => {
      this.refreshData();
    });
  }

  render() {
    const items = this.state.items.map((x, i) => {
      return <li key={x.id} className={x.isComplete} onClick={() => this.markAsComplete(x.id)}>
        {x.text}
        <button onClick={() => this.removeFromList(x.id)}>Delete</button>
      </li>
    })

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

module.exports = Todo;
