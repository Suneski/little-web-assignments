import React from 'react';

let headerStyle = {
  backgroundColor: "black",
  color: "white",
  fontSize: "40px",
  height: "100px"
}

class Header extends React.Component {

  render() {
    return (
      <div style={headerStyle}>
        <p>header</p>
      </div>
    )
  }
}

module.exports = Header;
