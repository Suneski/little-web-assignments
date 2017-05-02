import React from 'react';

let footerStyle = {
  fontSize: "15px",
  height: "120px",
  clear: "both",
  padding: "20px 0",
  borderTop: "2px solid grey"
}

class Footer extends React.Component {
  render() {
    return (
      <div style={footerStyle}>
        This app is built with
        <img style={{width: "300px"}} src="images/recipepuppy.png" alt="recipe puppy logo"/>
      </div>
    )
  }
}

module.exports = Footer;
