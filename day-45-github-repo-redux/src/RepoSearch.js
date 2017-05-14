import React from 'react';
import $ from 'jquery';

class Takoyaki extends React.Component {
  render() {
    return(
      <li>
        <div>Repo Name: {this.props.name}</div>
        <div>User: {this.props.login}</div>
      </li>
    )
  }
}

class RepoSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'https://api.github.com/search/repositories?q=takoyaki&page=1'
    })
    .done((data) => {
      console.log('Is this working!?', data);
      this.setState({
        repos: data.items
      })
    });
  }

  render() {
    let repos = this.state.repos.map((x) => <Takoyaki key={x.url} name={x.name} login={x.owner.login}/>);
    return (
      <div>
        <ul>
          {repos}
        </ul>
      </div>
    );
  }
}

module.exports = RepoSearch;
