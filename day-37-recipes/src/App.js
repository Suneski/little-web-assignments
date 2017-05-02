import React, { Component } from 'react';
import Header from './Header';
import Query from './Query';
import RecipeList from './RecipeList';
import Filter from './Filter';
import Footer from './Footer';
import './App.css';

let appContainerStyle = {
  width: "55%",
  margin: "0 auto",
  padding: "0 15px",
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
  overflow: "auto"
}

class App extends Component {
  constructor() {
    super();

    this.state={
      recipes: [
        {
          thumbnail: 'images/biscuit-topped-steak-pie.jpg',
          href: 'http://www.food.com/recipe/biscuit-topped-steak-pie-82443',
          title: 'Biscuit Topped Steak Pie',
          ingredients: 'potato, beef gravy, black pepper, vegetable, biscuit, sirloin steak, thyme'
        },
        {
          thumbnail: 'images/german-restaurant-steak.jpg',
          href: 'http://www.food.com/recipe/german-restaurant-steak-229367',
          title: 'German Restaurant Steak',
          ingredients: 'butter, onions, black pepper, rib eye steak, salt, salt, sour cream'
        },
        {
          thumbnail: 'images/barbaras-flank-steak.jpg',
          href: 'http://www.food.com/recipe/barbaras-flank-steak-dinner-218830',
          title: 'Barbara\'s Flank Steak Dinner',
          ingredients: 'black pepper, butter, rice, beef, corn, red pepper, salt, green onion, mushroom, water'
        }
      ],
      filters: ['potatoes', 'ketchup', 'molasses']
    }
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
