import React from 'react';
import './simplelist.css';


class Names extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      names: []
    };

    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.clickAdd = this.clickAdd.bind(this);
  }

  firstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  lastNameChange(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  clickAdd(evt) {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;

    var copy = this.state.names.slice();
    copy.push(firstName + " " + lastName)

    this.setState({
      firstName: '',
      lastName: '',
      names: copy
    })
  }

  render() {
    let names = this.state.names.map((x, i) => {
      return <li key={i + x}>{x}</li>
    });

    return (
      <div>
        <input placeholder="First Name" onChange={this.firstNameChange} value={this.state.firstName}/>
        <input placeholder="Last Name" onChange={this.lastNameChange} value={this.state.lastName}/>
        <button onClick={this.clickAdd}>add</button>
        <ol>
          {names}
        </ol>
      </div>
    )
  }



}


module.exports = Names;
