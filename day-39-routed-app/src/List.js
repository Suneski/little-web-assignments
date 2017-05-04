import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {

  render() {
    console.log('props', this.props);

    var people = this.props.people.map((x, i) => {
      return <li key={i + x.name}>
        <Link to={'/detail/' + x.id}>
          {x.name}
        </Link>
      </li>
    });

    return (
      <div>
        <ol>
          {people}
        </ol>
      </div>
    );
  }
}

module.exports = List;
