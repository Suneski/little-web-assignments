import React, { Component } from 'react';
import Header from './Header';
import Query from './Query';
import RecipeList from './RecipeList';
import Filter from './Filter';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Query />
        <RecipeList />
        <Filter />
        <Footer />
      </div>
    );
  }
}

export default App;
