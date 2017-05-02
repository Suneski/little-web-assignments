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
  }

  handleChange(event) {
    if (event.target.value === "blackbelt") {
      this.setState(
        {
          src: blackbelt,
          jobClass: "Black Belt"
        }
      );
    }
    if (event.target.value === "blackmage") {
      this.setState(
        {
          src: blackmage,
          jobClass: "Black Mage"
        }
      );
    }
    if (event.target.value === "fighter") {
      this.setState(
        {
          src: fighter,
          jobClass: "Fighter"
        }
      );
    }
    if (event.target.value === "redmage") {
      this.setState(
        {
          src: redmage,
          jobClass: "Red Mage"
        }
      );
    }
    if (event.target.value === "thief") {
      this.setState(
        {
          src: thief,
          jobClass: "Thief"
        }
      );
    }
    if (event.target.value === "whitemage") {
      this.setState(
        {
          src: whitemage,
          jobClass: "White Mage"
        }
      );
    }
  }

  render() {
    return (
      <div className="player">
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
        <img src={this.state.src} alt={this.state.value} className="sprite"/>
        <p>{this.state.newName}{this.state.jobClass}</p>
      </div>
    );
  }
}

module.exports = Select;
