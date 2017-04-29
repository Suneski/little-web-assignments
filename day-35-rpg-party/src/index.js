import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import blackbelt from './images/blackbelt.gif';
import blackmage from './images/blackmage.gif';
import fighter from './images/fighter.gif';
import redmage from './images/redmage.gif';
import thief from './images/thief.gif';
import whitemage from './images/whitemage.gif';

var img = document.querySelector('img');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: blackbelt,
      jobClass: 'Black Belt',
      src: blackbelt,
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {value: event.target.value}
    );
  }

  handleChangeName = (event) => {
    console.log('change name');
    this.setState({
      newName: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value === "blackbelt") {
      this.setState(
        {
          src: blackbelt,
          jobClass: "Black Belt"
        }
      );
    }
    if (this.state.value === "blackmage") {
      this.setState(
        {
          src: blackmage,
          jobClass: "Black Mage"
        }
      );
    }
    if (this.state.value === "fighter") {
      this.setState(
        {
          src: fighter,
          jobClass: "Fighter"
        }
      );
    }
    if (this.state.value === "redmage") {
      this.setState(
        {
          src: redmage,
          jobClass: "Red Mage"
        }
      );
    }
    if (this.state.value === "thief") {
      this.setState(
        {
          src: thief,
          jobClass: "Thief"
        }
      );
    }
    if (this.state.value === "whitemage") {
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
      <div>
        <p>Character Name: <input type="text" onChange={(e) => this.handleChangeName(e)}/></p>
        <form onSubmit={this.handleSubmit}>
          <p>Job Class: <select value={this.state.value} onChange={this.handleChange}>
            <option value="blackbelt">Black Belt</option>
            <option value="blackmage">Black Mage</option>
            <option value="fighter">Fighter</option>
            <option value="redmage">Red Mage</option>
            <option value="thief">Thief</option>
            <option value="whitemage">White Mage</option>
          </select></p>
          <button type="submit" value="Submit">Submit</button>
        </form>
        <img src={this.state.src} alt={this.state.value} className="sprite"/>
        <p>{this.state.newName || this.props.name} the {this.state.jobClass}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
