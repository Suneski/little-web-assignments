import React from 'react';
import { store, actions } from './store.js';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  handleChangeName = (event) => {
    console.log('change name');
    this.setState({
      newName: event.target.value + " the "
    });
    if (event.target.value.length >= 15) {
      alert('Exceeded character limit');
      this.setState({
        newName: this.state.newName
      });
    }
    if (event.target.value === "") {
      this.setState({
        newName: ''
      });
    }
  }

  handleChange(event) {
    if (event.target.value === "blackbelt") {
      store.dispatch(actions.BLACKBELT);
    }
    if (event.target.value === "blackmage") {
      store.dispatch(actions.BLACKMAGE);
    }
    if (event.target.value === "fighter") {
      store.dispatch(actions.FIGHTER);
    }
    if (event.target.value === "redmage") {
      store.dispatch(actions.REDMAGE);
    }
    if (event.target.value === "thief") {
      store.dispatch(actions.THIEF);
    }
    if (event.target.value === "whitemage") {
      store.dispatch(actions.WHITEMAGE);
    }
  }

  render() {
    return (
      <div className="player">
        <div className="details">
          <p>Character Name: <input type="text" onChange={(e) => this.handleChangeName(e)}/></p>
          <form>
            <p>Job Class: <select onChange={this.handleChange}>
              <option value="fighter">Fighter</option>
              <option value="blackbelt">Black Belt</option>
              <option value="thief">Thief</option>
              <option value="blackmage">Black Mage</option>
              <option value="whitemage">White Mage</option>
              <option value="redmage">Red Mage</option>
            </select></p>
          </form>
          <p>{this.state.newName}{this.state.jobClass}</p>
        </div>

        <div className="character">
          <img src={this.state.src} alt={this.state.value} className="sprite"/>
          <div className="stats">
            <p>HP: {this.state.stats.hp}</p>
            <p>STR: {this.state.stats.str}</p>
            <p>AGI: {this.state.stats.agi}</p>
            <p>INT: {this.state.stats.int}</p>
            <p>VIT: {this.state.stats.vit}</p>
            <p>LCK: {this.state.stats.lck}</p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Select;
