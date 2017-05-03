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
      filters: [],
      recipeQueryValue: '',
      filterQueryValue: '',
      query: ''
    }

    this.foodQueryValueChange = this.foodQueryValueChange.bind(this);
    this.foodQueryValueComplete = this.foodQueryValueComplete.bind(this);
    this.filterQueryValueChange = this.filterQueryValueChange.bind(this);
    this.filterQueryValueComplete = this.filterQueryValueComplete.bind(this);

  }

  makeAjaxCall() {
    $.ajax({
      url: `/api/?i=${this.state.filters}&q=${this.state.query}`
    })
    .done((data) => {
      data = JSON.parse(data);
      console.log("do I have data", data);

      let mappedArray = data.results.map((x) => {
        if (x.thumbnail === '') {
          return {
            thumbnail: "images/no-image.png",
            href: x.href,
            title: x.title,
            ingredients: x.ingredients
          };
        }
        else {
          return {
            thumbnail: x.thumbnail,
            href: x.href,
            title: x.title,
            ingredients: x.ingredients
          };
        }
      })

      this.setState ({
        recipes: mappedArray
      });
    });
  }

  foodQueryValueChange(value) {
    this.setState({
      recipeQueryValue: value
    });
  }

  foodQueryValueComplete() {
    this.setState({
        recipeQueryValue: '',
        query: this.state.recipeQueryValue
      },
      () => this.makeAjaxCall()
    );
  }



  filterQueryValueChange(value) {
    this.setState({
      filterQueryValue: value
    });
  }

  filterQueryValueComplete() {
    let copy = this.state.filters.slice();
    copy.push(this.state.filterQueryValue);

    this.setState({
        filters: copy,
        filterQueryValue: ''
      },
      () => this.makeAjaxCall()
    );
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
          <Query
            inputValue={this.state.recipeQueryValue}
            onInputChange={this.foodQueryValueChange}
            onInputComplete={this.foodQueryValueComplete}
          />
          <RecipeList recipes={this.state.recipes} />
          <Filter
            filters={this.state.filters}
            inputValue={this.state.filterQueryValue}
            onInputChange={this.filterQueryValueChange}
            onInputComplete={this.filterQueryValueComplete}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
