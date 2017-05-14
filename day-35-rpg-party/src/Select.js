import React from 'react';

import blackbelt from './images/blackbelt.gif';
import blackmage from './images/blackmage.gif';
import fighter from './images/fighter.gif';
import redmage from './images/redmage.gif';
import thief from './images/thief.gif';
import whitemage from './images/whitemage.gif';


class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: fighter,
      jobClass: 'Fighter',
      src: fighter,
      stats: {
        hp: 35,
        str: 20,
        agi: 5,
        int: 1,
        vit: 10,
        lck: 5,
      }
    };

    this.handleChange = this.handleChange.bind(this);
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
      this.setState(
        {
          jobClass: "Black Belt",
          src: blackbelt,
          stats: {
            hp: 33,
            str: 5,
            agi: 5,
            int: 5,
            vit: 20,
            lck: 5,
          }
        }
      );
    }
    if (event.target.value === "blackmage") {
      this.setState(
        {
          jobClass: "Black Mage",
          src: blackmage,
          stats: {
            hp: 25,
            str: 1,
            agi: 10,
            int: 20,
            vit: 1,
            lck: 10,
          }
        }
      );
    }
    if (event.target.value === "fighter") {
      this.setState(
        {
          jobClass: 'Fighter',
          src: fighter,
          stats: {
            hp: 35,
            str: 20,
            agi: 5,
            int: 1,
            vit: 10,
            lck: 5,
          }
        }
      );
    }
    if (event.target.value === "redmage") {
      this.setState(
        {
          jobClass: "Red Mage",
          src: redmage,
          stats: {
            hp: 30,
            str: 10,
            agi: 10,
            int: 10,
            vit: 5,
            lck: 5,
          }
        }
      );
    }
    if (event.target.value === "thief") {
      this.setState(
        {
          jobClass: "Thief",
          src: thief,
          stats: {
            hp: 30,
            str: 5,
            agi: 10,
            int: 5,
            vit: 5,
            lck: 15
          }
        }
      );
    }
    if (event.target.value === "whitemage") {
      this.setState(
        {
          jobClass: "White Mage",
          src: whitemage,
          stats: {
            hp: 28,
            str: 5,
            agi: 5,
            int: 15,
            vit: 10,
            lck: 5,
          }
        }
      );
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
