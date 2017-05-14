import React from 'react';
import $ from 'jquery';

import SearchListItem from './SearchListItem';

class RepoSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: 'takoyaki',
      page: 1,
      repos: []
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    const cb = (data) => {
      this.setState({
        items: data.items
      });
    };
    $.ajax({
      url: `https://api.github.com/search/repositories?q=${this.state.searchTerm}&page=${this.state.page}`
    })
    .done((data) => {
      this.setState({
        repos: data.items
      })
      console.log('Does this work!?', data);
    });
  }










  runSearch(evt) {
    if (evt.keyCode === 13) {
      console.log(evt.target.value);
      this.setState({
        searchTerm: evt.target.value
      });
    }
  }

  render() {
    let repos = this.state.repos.map((x) => <SearchListItem key={x.url} name={x.name} login={x.owner.login}/>);
    return (
      <div>
        <nav>
          <p id='search'>SEARCH: </p>
          <input
            id='search-query'
            placeholder="github repository name"
            onKeyUp={(evt) => this.runSearch(evt)}/>
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
