import React from 'react';

let headerStyle = {
  backgroundColor: "black",
  color: "white",
  fontSize: "40px",
  padding: "10px 15px",
  height: "50px"
}

class Header extends React.Component {

  render() {
    return (
      <div style={headerStyle}>
        My Recipe App
      </div>
    )
  }
}

module.exports = Header;
