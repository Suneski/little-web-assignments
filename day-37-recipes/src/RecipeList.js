import React from 'react';

let recipeListStyle = {
  backgroundColor: "pink",
  width: "50%",
  minHeight: "700px",
  float: "left"
}

class RecipeList extends React.Component {
  render() {
    return (
      <div style={recipeListStyle}>
        <p>recipe list</p>
      </div>
    )
  }
}

module.exports = RecipeList;
