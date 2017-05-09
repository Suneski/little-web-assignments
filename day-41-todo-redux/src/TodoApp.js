import React from 'react';
import $ from 'jquery';
import { store } from './store.js';
import Api from './Api.js';
import './TodoApp.css';

const bucketId = '5730a3d7-99df-4692-b188-d34689579a20';
const baseUrl = 'https://spiffy-todo-api.herokuapp.com/api/';

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
    Api.refreshData();
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      Api.createNewItem(this.state.inputValue, () => Api.refreshData());
      const action = { type: 'CLEAR_INPUT' };
      store.dispatch(action);
    }
  }

  handleChange(evt) {
    const action = { type: 'VALUE_CHANGE', value: evt.target.value };
    store.dispatch(action);
  }

  removeFromList(id, evt) {
    evt.stopPropagation();
    Api.removeFromList(id, () => Api.refreshData());
  }

  markAsComplete(id) {
    $.ajax({
      url: `${baseUrl}item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST'
    })
    .done((data) => {
      Api.refreshData();
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
