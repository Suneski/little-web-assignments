import React from 'react';
import $ from 'jquery';

class Pokemon extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      items: []
    }
  }

  refreshData() {
    $.ajax({
      url: `http://pokeapi.co/api/v2/pokemon/${dexNumber}/`
    })
    .done((data) => {
      console.log('what data do I have?', data);
    });
  }

  keyUp(evt) {
    if (evt.keyCode === 13) {
      this.setState({
        inputValue: ''
      });
    }
  }

  textChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
    console.log(this.state.inputValue)
  }


  render() {
    return (
      <div className="pokeApp">
        <input
          onKeyUp={(evt) => this.keyUp(evt)}
          onChange={(evt) => this.textChange(evt)}
          value={this.state.inputValue}
        />
      </div>
    )
  }
}

module.exports = Pokemon;
