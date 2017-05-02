import React, { Component } from 'react';
import Header from './Header';
import Query from './Query';
import RecipeList from './RecipeList';
import Filter from './Filter';
import Footer from './Footer';
import './App.css';
import $ from 'jquery';

let appContainerStyle = {
  width: "55%",
  margin: "0 auto",
  padding: "0 15px",
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
  borderBottom: "1px solid black",
  overflow: "auto"
}

class App extends Component {
  constructor() {
    super();

    this.state={
      recipes: [],
      filters: ['potatoes', 'ketchup', 'molasses']
    }
  }

  makeAjaxCall() {
    $.ajax({
      url: "/api/?i=onions,ketchup&q=steak"
    })
    .done((data) => {
      data = JSON.parse(data);
      console.log("do I have data", data);

      let mappedArray = data.results.map((x) => {

        return {
          thumbnail: x.thumbnail,
          href: x.href,
          title: x.title,
          ingredients: x.ingredients
        };
      })

      this.setState ({
        recipes: mappedArray
      });
    });
  }

  componentDidMount() {
    console.log("ajax here");

    this.makeAjaxCall();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="AppContainer" style={appContainerStyle}>
          <Query />
          <RecipeList recipes={this.state.recipes} />
          <Filter filters={this.state.filters} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
