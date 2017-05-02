import React from 'react';

let queryStyle = {
  fontSize: "20px",
  padding: "30px 0 10px 0",
  borderBottom: "2px solid grey"
}



class Query extends React.Component {
  foodQuery(evt) {
    if (evt.keyCode === 13) {
      console.log(evt.target.value);
      evt.target.value = '';
    }
  }

  render() {
    return (
      <div style={queryStyle}>
        <input placeholder="search" onKeyUp={this.foodQuery} />
      </div>
    );
  }
}

module.exports = Query;
