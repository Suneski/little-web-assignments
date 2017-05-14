import React from 'react';
import $ from 'jquery';

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
