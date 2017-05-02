import React from 'react';

let queryStyle = {
  fontSize: "20px",
  padding: "30px 0 10px 0",
  borderBottom: "2px solid grey"
}

class Query extends React.Component {
  render() {
    return (
      <div style={queryStyle}>
        <input placeholder="search"/>
      </div>
    );
  }
}

module.exports = Query;
