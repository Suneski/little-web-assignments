import React from 'react';
import $ from 'jquery';

import Api from './Api.js';

const bucketId = '5730a3d7-99df-4692-b188-d34689579a20';
const baseUrl = 'https://spiffy-todo-api.herokuapp.com/api/';

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      inputValue: '',
      items: []
    };
  }

  refreshData() {
    const cb = (data) => {
      this.setState({
        items: data.items
      });
    };

    Api.refreshData(cb);
  }

  componentDidMount() {
    this.refreshData();
  }

  createNewItem(inputText) {
    Api.createNewItem(inputText, () => this.refreshData());
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

  removeFromList(id, evt) {
    evt.stopPropagation();
    Api.removeFromList(id, () => this.refreshData());
  }

  markAsComplete(id) {
    $.ajax({
      url: `${baseUrl}item/${id}/togglestatus?bucketId=${bucketId}`,
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
        <button onClick={(evt) => this.removeFromList(x.id, evt)}>Delete</button>
      </li>
    })

    return (
      <div className="todoapp">
        Add To-Do Item: <input
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.inputValue}
        />
        <ol className="toDoList">
          {items}
        </ol>
      </div>
    );
  }
}

module.exports = TodoApp;
