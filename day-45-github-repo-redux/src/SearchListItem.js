import React from 'react';

class SearchListItem extends React.Component {
  render() {
    return(
      <li>
        <div>Repo Name: <a href=''>{this.props.name}</a></div>
        <div>User: <a href=''>{this.props.login}</a></div>
      </li>
    )
  }
}

module.exports = SearchListItem;
