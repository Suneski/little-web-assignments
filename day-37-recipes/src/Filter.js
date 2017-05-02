import React from 'react';

let filterStyle = {
  width: "47%",
  minHeight: "700px",
  float: "left",
  padding: "20px 5px"
}

let inputStyle = {
  margin: "10px 0"
}

let filterListItem = {
  margin: "10px 0",
  padding: "10px",
  border: "1px solid rgba(138, 138, 138, 0.47)"
}

class Filter extends React.Component {
  render() {
    console.log('Where are my filters?', this.props);

    const filterItems = this.props.filters.map((x, i) => <li style={filterListItem} key={i + x}>{x}</li>)

    return (
      <div style={filterStyle}>
        <p>Would you also like to filter by ingredients?</p>
        <input placeholder="ingredient" style={inputStyle}/>
        <ol>
          {filterItems}
        </ol>
      </div>

    );
  }
}

module.exports = Filter;
