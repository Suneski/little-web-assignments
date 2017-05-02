import React from 'react';

let filterStyle = {
  backgroundColor: "purple",
  width: "50%",
  minHeight: "700px",
  float: "left"
}

class Filter extends React.Component {
  render() {
    return (
      <div style={filterStyle}>
        <p>filter</p>
      </div>
    )
  }
}

module.exports = Filter;
