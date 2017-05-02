import React from 'react';

let queryStyle = {
  backgroundColor: "grey",
  fontSize: "20px",
  padding: "5px"
}

class Query extends React.Component {
  render() {
    return (
      <div style={queryStyle}>
        <input />
      </div>
    )
  }
}

module.exports = Query;
