import React from 'react';

const listOfJokes = [
  'Chuck Norris can sleep with 3 eyes open.',
  'The Red Scare in America actually had nothing to do with Communism. Chuck Norris was just wearing a Chicago Bulls jersey that day.',
  'Chuck Norris does not need change because prices change to whatever Chuck Norris has available.',
  'M.C. Hammer learned the hard way that Chuck Norris can touch this.',
  'Chuck Norris once went to Mars. Thats why there are no signs of life.'
]


class Chuck extends React.Component {
  constructor() {
    super();

    this.state = {
      text: 'Click button for random Chuck Norris quote'
    }
  };

  randomizer() {
    var rng = Math.floor((Math.random() * listOfJokes.length));
    this.setState({
      text: listOfJokes[rng]
    })
  }

  render() {
    return (
      <div>
        {this.state.text}
        <button style={{display: 'block', margin: '0 auto'}} onClick={() => this.randomizer()}>RANDOM JOKE</button>
      </div>
    )
  }
}

module.exports = Chuck;
