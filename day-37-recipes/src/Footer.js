import React from 'react';

let footerStyle = {
  backgroundColor: "black",
  color: "white",
  fontSize: "40px",
  height: "50px",
  clear: "both"
}

class Footer extends React.Component {
  render() {
    return (
      <div style={footerStyle}>
        <p>footer</p>
      </div>
    )
  }
}

module.exports = Footer;
