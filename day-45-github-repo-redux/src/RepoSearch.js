import React from 'react';
import $ from 'jquery';

import SearchListItem from './SearchListItem';

class RepoSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: 'taco',
      page: 1,
      repos: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: `https://api.github.com/search/repositories?q=${this.state.searchTerm}&page=${this.state.page}`
    })
    .done((data) => {
      console.log('Is this working!?', data);
      this.setState({
        repos: data.items
      })
    });
  }

  render() {
    let repos = this.state.repos.map((x) => <SearchListItem key={x.url} name={x.name} login={x.owner.login}/>);
    return (
      <div>
        <nav>
          <p id='search'>SEARCH: </p>
          <input id='search-query' placeholder="github repository name"/>
        </nav>
        <div className="repo-search-container">
          <ul>
            {repos}
          </ul>
        </div>

      </div>
    );
  }
}

module.exports = RepoSearch;
