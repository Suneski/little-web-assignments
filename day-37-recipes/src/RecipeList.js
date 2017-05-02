import React from 'react';

let recipeListStyle = {
  width: "47%",
  minHeight: "700px",
  padding: "10px",
  float: "left",
}

let listItemStyle = {
  border: "1px solid grey",
  padding: "5px",
  overflow: "auto",
  margin: "10px 0"
}

class Recipe extends React.Component {
  render() {
    return (
      <li style={listItemStyle}>
        <img src={this.props.thumbnail} style={{float: "left"}} alt={this.props.title}/>
        <a href={this.props.href} style={{fontWeight: "bold"}}>{this.props.title}</a>
        <p>Ingredients: {this.props.ingredients}</p>
      </li>
    );
  }
}

class RecipeList extends React.Component {
  render() {

    var recipes = this.props.recipes.map((x, index) => {
      return <Recipe
              thumbnail={x.thumbnail}
              title={x.title}
              ingredients={x.ingredients}
              href={x.href}
              key={index} />
    });


    return (
      <div style={recipeListStyle}>
        <ol>
          {recipes}
        </ol>
      </div>
    )
  }
}

module.exports = RecipeList;
