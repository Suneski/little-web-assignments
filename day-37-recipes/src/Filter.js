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
  filterQuery(evt) {
    if (evt.keyCode === 13) {
      this.props.onInputComplete();
    }
  }


  render() {

    const filterItems = this.props.filters.map((x, i) => <li style={filterListItem} key={i + x}>{x}</li>)

    return (
      <div style={filterStyle}>
        <p>Would you also like to filter by ingredients?</p>
        <input
          placeholder="ingredient"
          style={inputStyle}
          onChange={(evt) => this.props.onInputChange(evt.target.value)}
          onKeyUp={(evt) => this.filterQuery(evt)} />
        <ol>
          {filterItems}
        </ol>
      </div>

    );
  }
}

module.exports = Filter;
