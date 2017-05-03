import React from 'react';

let queryStyle = {
  fontSize: "20px",
  padding: "30px 0 10px 0",
  borderBottom: "2px solid grey"
}



class Query extends React.Component {
  foodQueryChange(evt) {
    if (evt.keyCode === 13) {
      this.props.onInputComplete();
    }
  }

  render() {
    return (
      <div style={queryStyle}>
        <input
          placeholder="search"
          value={this.props.inputValue}
          onChange={(evt) => this.props.onInputChange(evt.target.value)}
          onKeyUp={(evt) => this.foodQueryChange(evt)} />
      </div>
    );
  }
}

module.exports = Query;
