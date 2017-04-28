import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var quotes = [
  "When Chuck Norris was born he drove his mom home from the hospital.",
  "Chuck Norris has a diary. It's called the Guinness Book of World Records.",
  "Chuck Norris threw a grenade and killed 50 people, then it exploded.",
  "Chuck Norris doesn't worry about high gas prices. His vehicles run on fear.",
  "Chuck Norris counted to infinity. Twice."
]

class Chuck extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "Click the button for a Chuck Norris joke",
      joke: {

      }
    }
  }

  randomizer() {
    var rng = Math.floor(Math.random() * 5);
    this.setState({
      text: quotes[rng]
    })

  }

  render() {
    return (
      <div>
        {this.state.text}

        <button onClick={ () => this.randomizer()}>Click me!</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Chuck />,
  document.getElementById('root')
);
